import React, { useEffect, useState, useMemo } from "react";
import { loadVGSCollect } from "@vgs/collect-js";
import { VGSCollectForm, VGSCollectProvider } from "@vgs/collect-js-react";

const App = () => {
  const [isVGSCollectScriptLoaded, setCollectScriptLoaded] = useState(false);

  const vgsCollectConfig = useMemo(
    () => ({
      vaultId: "tntq1zbqvgz",
      environment: "sandbox",
      version: "2.18.0",
      cname: "secure.api-sandbox.astra.finance",
    }),
    []
  );

  useEffect(() => {
    loadVGSCollect(vgsCollectConfig).then(() => setCollectScriptLoaded(true));
  }, [vgsCollectConfig]);

  return (
    <>
      <h1>Testing VGS Collect + @emotion/react</h1>
      {isVGSCollectScriptLoaded && (
        <VGSCollectProvider>
          <VGSCollectForm
            vaultId={vgsCollectConfig.vaultId}
            environment={vgsCollectConfig.environment}
            cname={vgsCollectConfig.cname}
            action="/v1/cards"
            submitParameters={{}}
          >
            <div>
              <span for="card_number">Card Number</span>
              <VGSCollectForm.CardNumberField
                name="card_number"
                placeholder=""
                css={{color: 'red'}}
                validations={["required", "validCardNumber"]}
              />
            </div>
            <div>
              <span for="expiration_date">Expiration Date</span>
              <VGSCollectForm.CardExpirationDateField
                name="expiration_date"
                placeholder=""
                css={{color: 'red', fontSize: '20px'}}
                validations={["required", "validCardExpirationDate"]}
              />
            </div>

            <div>
              <span for="card_security_code">Card CVV</span>
              <VGSCollectForm.CardSecurityCodeField
                name="card_security_code"
                placeholder=""
                css={{color: 'red'}}
                validations={["required", "validCardSecurityCode"]}
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </VGSCollectForm>
        </VGSCollectProvider>
      )}
    </>
  );
};

export default App;
