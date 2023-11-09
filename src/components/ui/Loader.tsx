import clsx from "clsx";

type ColorType =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

interface LoaderProps {
  variant?: "grow" | "border";
  size?: "small";
  color?: ColorType;
  text?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  variant = "grow",
  color = "primary",
  size,
  text,
}) => {
  return (
    <div className="d-flex justify-content-center align-items-center p-5 vh-100">
      <div
        className={clsx(
          `spinner-${variant}`,
          size === "small" && "spinner-border-sm",
          `text-${color}`,
          "m-2"
        )}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <strong role="status"> {text ? text : "Loading..."}</strong>
    </div>
  );
};
