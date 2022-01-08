import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import { ClaimHealthModal } from "./modals/ClaimHealthModal";

interface Props {
  name: string;
  maxHp: number;
  hp: number;
  isBoss?: boolean;
}

export const HealthBar: React.FC<Props> = ({
  hp,
  maxHp,
  name,
  isBoss = false,
}) => {
  var percent = (hp / maxHp) * 100;
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <ClaimHealthModal
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false);
        }}
      />
      <div className="flex flex-col space-y-5">
        <div className="flex flex-row items-center">
          <span className="font-gasalt text-4xl font-bold text-white ">
            {name} HP :{" "}
          </span>

          <span className="font-gasalt text-4xl text-white font-bold pl-3">
            {hp} / {maxHp}
          </span>
          {!isBoss && (
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className="underline text-white font-bold pl-3 font-gasalt text-xl"
            >
              Claim Health
            </button>
          )}
        </div>
        <ProgressBar
          height={20}
          filledBackground={"rgb(239, 68, 68)"}
          percent={percent}
          unfilledBackground={"#fff"}
        >
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src="/images/star.png"
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src="/images/star.png"
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src="/images/star.png"
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src="/images/star.png"
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src="/images/star.png"
              />
            )}
          </Step>
        </ProgressBar>
      </div>
    </>
  );
};

export default HealthBar;
