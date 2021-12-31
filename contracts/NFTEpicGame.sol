// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./libraries/Base64.sol";
import "hardhat/console.sol";

contract NFTEpicGame is ERC721, ReentrancyGuard, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    address epicToken;

    struct CharacterAttributes {
        uint256 characterIndex;
        string name;
        string imageURI;
        uint256 hp;
        uint256 maxHp;
        uint256[] attacks;
        uint256[] specialAttacks;
    }

    struct AttackType {
        uint256 attackIndex;
        string attackName;
        uint256 attackDamage;
        string attackImage;
    }

    struct SpecialAttackType {
        uint256 price;
        uint256 specialAttackIndex;
        string specialAttackName;
        uint256 specialAttackDamage;
        string specialAttackImage;
    }

    AttackType[] allAttacks;
    SpecialAttackType[] allSpecialAttacks;

    struct BigBoss {
        string name;
        string imageURI;
        uint256 hp;
        uint256 maxHp;
        uint256 attackDamage;
    }

    BigBoss public bigBoss;

    CharacterAttributes[] defaultCharacters;

    mapping(uint256 => CharacterAttributes) public nftHolderAttributes;
    mapping(address => uint256) public nftHolders;

    event CharacterNFTMinted(
        address sender,
        uint256 tokenId,
        uint256 characterIndex
    );
    event AttackComplete(uint256 newBossHp, uint256 newPlayerHp);

    constructor(
        // All the characters attributes
        string[] memory characterName,
        string[] memory characterImageURI,
        uint256[] memory characterMaxHp,
        uint256[][] memory characterAttacks,
        // All the boss attributes
        string memory bossName,
        string memory bossImageURI,
        uint256 bossHp,
        uint256 bossAttackDamage,
        address epicTokenAddress
    ) ERC721("Heroes", "HERO") {
        epicToken = epicTokenAddress;
        for (uint256 i = 0; i < characterName.length; i++) {
            CharacterAttributes memory charAttribute;
            charAttribute.characterIndex = i;
            charAttribute.name = characterName[i];
            charAttribute.imageURI = characterImageURI[i];
            charAttribute.hp = characterMaxHp[i];
            charAttribute.maxHp = characterMaxHp[i];
            charAttribute.attacks = characterAttacks[i];

            defaultCharacters.push(charAttribute);

            CharacterAttributes memory c = defaultCharacters[i];
            console.log(
                "Done initializing %s w/ HP %s, img %s",
                c.name,
                c.hp,
                c.imageURI
            );
        }
        _tokenIds.increment();
        bigBoss = BigBoss({
            name: bossName,
            imageURI: bossImageURI,
            hp: bossHp,
            maxHp: bossHp,
            attackDamage: bossAttackDamage
        });
        console.log(
            "Done initializing boss %s w/ HP %s, img %s",
            bigBoss.name,
            bigBoss.hp,
            bigBoss.imageURI
        );
    }

    function addAttacks(
        // All the attacks for each character
        string[] memory attackNames,
        string[] memory attackImages,
        uint256[] memory attackDamages,
        uint256[] memory attackIndexes
    ) public onlyOwner {
        console.log("attackIndexes LENGHT ; ", attackIndexes.length);
        for (uint256 j = 0; j < attackIndexes.length; j++) {
            allAttacks.push(
                AttackType(
                    attackIndexes[j],
                    attackNames[j],
                    attackDamages[j],
                    attackImages[j]
                )
            );
        }
        console.log("Done adding all attacks");
    }

    function addSpecialAttacks(
        // All the special attacks for each character
        string[] memory specialAttackNames,
        string[] memory specialAttackImages,
        uint256[] memory specialAttackDamages,
        uint256[] memory specialAttackPrices,
        uint256[] memory specialAttackIndexes
    ) public onlyOwner {
        for (uint256 j = 0; j < specialAttackIndexes.length; j++) {
            allSpecialAttacks.push(
                SpecialAttackType(
                    specialAttackPrices[j],
                    specialAttackIndexes[j],
                    specialAttackNames[j],
                    specialAttackDamages[j],
                    specialAttackImages[j]
                )
            );
        }
        console.log("Done adding all special attacks");
    }

    function mintCharacterNFT(uint256 _characterIndex) external payable {
        require(
            _characterIndex < defaultCharacters.length,
            "Character index out of bounds"
        );
        require(
            IERC20(epicToken).allowance(msg.sender, address(this)) >= 10 ether,
            "Please approve the required token transfer before minting"
        );
        IERC20(epicToken).transferFrom(msg.sender, address(this), msg.value);
        uint256 newItemId = _tokenIds.current();
        _safeMint(msg.sender, newItemId);
        nftHolderAttributes[newItemId] = CharacterAttributes({
            characterIndex: _characterIndex,
            name: defaultCharacters[_characterIndex].name,
            imageURI: defaultCharacters[_characterIndex].imageURI,
            hp: defaultCharacters[_characterIndex].hp,
            maxHp: defaultCharacters[_characterIndex].maxHp,
            attacks: defaultCharacters[_characterIndex].attacks,
            specialAttacks: defaultCharacters[_characterIndex].specialAttacks
        });
        console.log(
            "Minted NFT w/ tokenId %s and characterIndex %s",
            newItemId,
            _characterIndex
        );
        nftHolders[msg.sender] = newItemId;
        _tokenIds.increment();
        console.log(
            "Contract balance : ",
            IERC20(epicToken).balanceOf(address(this))
        );
        emit CharacterNFTMinted(msg.sender, newItemId, _characterIndex);
    }

    function attackBoss(uint256 attackIndex) public {
        uint256 nftTokenIdOfPlayer = nftHolders[msg.sender];
        CharacterAttributes storage player = nftHolderAttributes[
            nftTokenIdOfPlayer
        ];
        require(player.hp > 0, "Error: character must have HP to attack boss.");
        require(bigBoss.hp > 0, "Error: boss must have HP to attack boss.");
        uint256 attackDamage = 0;
        for (uint256 i = 0; i < player.attacks.length; i++) {
            if (attackIndex == player.attacks[i]) {
                attackDamage = allAttacks[attackIndex].attackDamage;
            }
        }
        require(attackDamage > 0, "Error: attack must have damage.");
        if (bigBoss.hp < attackDamage) {
            bigBoss.hp = 0;
        } else {
            bigBoss.hp = bigBoss.hp - attackDamage;
        }

        if (player.hp < bigBoss.attackDamage) {
            player.hp = 0;
        } else {
            player.hp = player.hp - bigBoss.attackDamage;
        }

        console.log("Player attacked boss. New boss hp: %s", bigBoss.hp);
        console.log("Boss attacked player. New player hp: %s\n", player.hp);
        emit AttackComplete(bigBoss.hp, player.hp);
    }

    function buySpecialAttack(uint256 specialAttackIndex) public payable {
        uint256 nftTokenIdOfPlayer = nftHolders[msg.sender];
        require(
            nftTokenIdOfPlayer > 0,
            "Error: must have NFT to buy special attack."
        );
        CharacterAttributes storage player = nftHolderAttributes[
            nftTokenIdOfPlayer
        ];
        require(
            player.hp > 0,
            "Error: character must have HP to buy special attack."
        );
        require(
            allSpecialAttacks[specialAttackIndex].price * (1 ether) >=
                msg.value,
            "Error: user must provide enough token to buy special attack."
        );
        player.specialAttacks.push(specialAttackIndex);
        emit AttackComplete(bigBoss.hp, player.hp);
    }

    function checkIfUserHasNFT()
        public
        view
        returns (CharacterAttributes memory)
    {
        uint256 userNftTokenId = nftHolders[msg.sender];
        if (userNftTokenId > 0) {
            return nftHolderAttributes[userNftTokenId];
        } else {
            CharacterAttributes memory emptyStruct;
            return emptyStruct;
        }
    }

    function getAllDefaultCharacters()
        public
        view
        returns (CharacterAttributes[] memory)
    {
        return defaultCharacters;
    }

    function getAllAttacks() public view returns (AttackType[] memory) {
        return allAttacks;
    }

    function getAllSpecialAttacks()
        public
        view
        returns (SpecialAttackType[] memory)
    {
        return allSpecialAttacks;
    }

    function getBigBoss() public view returns (BigBoss memory) {
        return bigBoss;
    }

    function tokenURI(uint256 _tokenId)
        public
        view
        override
        returns (string memory)
    {
        CharacterAttributes memory charAttributes = nftHolderAttributes[
            _tokenId
        ];
        string memory strHp = Strings.toString(charAttributes.hp);
        string memory strMaxHp = Strings.toString(charAttributes.maxHp);

        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "',
                        charAttributes.name,
                        " -- NFT #: ",
                        Strings.toString(_tokenId),
                        '", "description": "This is an NFT that lets people play in the game Metaverse Slayer!", "image": "',
                        charAttributes.imageURI,
                        '", "attributes": [{"trait_type": "Health Points", "value": ',
                        strHp,
                        ', "max_value": ',
                        strMaxHp,
                        '}, ]}"'
                    )
                )
            )
        );

        string memory output = string(
            abi.encodePacked("data:application/json;base64,", json)
        );
        return output;
    }
}
