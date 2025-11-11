import { Header } from '../ui/organisms/Header.tsx';
import { Footer } from '../ui/organisms/Footer.tsx';
import { Cta } from './sections/Cta.tsx';
import {
  TwoColumnSection,
  TwoColumnSectionItem,
} from '../ui/organisms/TwoColumnBlock.tsx';
import { Button } from '../ui/atoms/Button.tsx';
import { Pricing } from './sections/Pricing.tsx';

function App() {
  
  return (
    <div>
      {/* HEADER */}
      <Header />

      {/* PRICING */}
      <Pricing/>

    {/* SECTIOPN */}
      <TwoColumnSection>
        <TwoColumnSectionItem>
          <div style={{maxWidth: 480}}>
            <div>
              <h3 className="title-2">Empowering Top Company</h3>
              <h3 className="title-2">with Seamless Integrations</h3>
            </div>

            <p className="text-body my-5">
              Experience seamless connections with our innovative solutions,
              designed to effortlessly integrate with your existing systems,
              enhance productivity, and drive your business towards greater
              success.
            </p>

            <Button variant="tertiary">Work With Us</Button>
          </div>
        </TwoColumnSectionItem>

        <TwoColumnSectionItem alignX="center">
          <div
            style={{
              height: 380,
              width: 480,
              marginTop: 20,
              borderRadius: 16,
              backgroundColor: 'var(--accent-yellow-green)',
            }}
          ></div>
        </TwoColumnSectionItem>
      </TwoColumnSection>

      {/* CALL TO ACTION */}
      <Cta />
      
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
