import { CircularProgress } from "@mui/material";
import { BusinessColors } from "@/lib";

export function LoadingScreen() {
  return (
    <div style={{
      background: "#fff",
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 9999,
    }}>
      <CircularProgress style={{ color: BusinessColors.Blue }} size={64} thickness={5} />
    </div>
  );
}
