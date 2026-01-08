import { useLocation } from "preact-iso";
import { Name, NameLayout } from "../assets/name";

export function Header() {
  const { url } = useLocation();

  return (
    <header>
      <nav>
        <a href="/">
          <Name
            componentProps={{
              strokeWidth: 5,
              width: 100,
              height: 30,
            }}
            layout={NameLayout.INLINE}
          />
        </a>
        <a href="/404" class={url == "/404" && "active"}>
          404
        </a>
      </nav>
    </header>
  );
}
