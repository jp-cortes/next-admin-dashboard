import { ProviderAuth } from "@hooks/useAuth";
import "@styles/tailwind.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ProviderAuth>
        
          <Component {...pageProps} />
        
      </ProviderAuth>
    </>
  );
}
