import { Name } from "../../assets/name";
import preactLogo from "../../assets/preact.svg";
import "./style.css";

export function Home() {
  return (
    <div class="home">
      <Name
        componentProps={{ strokeWidth: 5, width: 200, height: 60 }}
        layout="stacked"
      />
    </div>
  );
}
