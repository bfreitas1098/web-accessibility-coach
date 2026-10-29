import "./globals.css";
import Navigation from "./components/Navigation";

export default function History() {
  return (
    <>
      <Navigation activeItem="history" />
      <div>Your screenshot review history</div>
    </>
  );
}
