import { useEffect, useState } from "react";

const CORRECT_PIN = "344795";
const MAX_ATTEMPTS = 3;
const TIMEOUT_SECONDS = 30;

export default function PinAuthOverlay({
  onAuthenticated,
}: {
  onAuthenticated: () => void;
}) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [timeout, setTimeoutSeconds] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (timeout > 0) {
      interval = setInterval(() => {
        setTimeoutSeconds((prev) => {
          if (prev === 1) setAttempts(0);
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timeout]);

  useEffect(() => {
    if (pin.length === 6) {
      if (pin === CORRECT_PIN) {
        localStorage.setItem("authenticated", "true");
        onAuthenticated();
      } else {
        setError(true);
        setAttempts((prev) => prev + 1);
        if (navigator.vibrate) navigator.vibrate(200);

        setTimeout(() => {
          setError(false);
          setPin("");
        }, 800);

        if (attempts + 1 >= MAX_ATTEMPTS) {
          setTimeoutSeconds(TIMEOUT_SECONDS);
        }
      }
    }
  }, [pin]);

  const handleInput = (digit: string) => {
    if (pin.length < 6 && timeout === 0) setPin((prev) => prev + digit);
  };

  const handleDelete = () => {
    if (timeout === 0) setPin((prev) => prev.slice(0, -1));
  };

  return (
    <div className="pin-overlay">
      <div className="pin-box">
        <p className="pin-title">
          {timeout > 0 ? `Try again in ${timeout}s` : "Enter your 6-digit PIN"}
        </p>

        <div className={`pin-dots ${error ? "shake" : ""}`}>
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className={`dot ${pin.length > i ? "filled" : ""} ${
                error ? "error" : ""
              }`}
            ></span>
          ))}
        </div>

        <div className="keypad">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "←"].map(
            (key, idx) => (
              <button
                key={idx}
                className="key"
                onClick={() => {
                  if (key === "←") handleDelete();
                  else if (key) handleInput(key);
                }}
                disabled={key === "" || timeout > 0}
              >
                {key}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
