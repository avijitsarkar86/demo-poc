import BestCryptoProject from '@/components/surveys/best-crypto-project';
import BtcPriceSurvey from '@/components/surveys/btc-price-survey';
import FutureBlockchainSurvey from '@/components/surveys/future-blockchain-survey';
import StockSurvey from '@/components/surveys/stock-survey';

export default function Survey() {
  return (
    <div>
      <div>Survey Page</div>
      <div className='flex border-red-100 justify-between'>
        <BtcPriceSurvey />
        <StockSurvey />
        <BestCryptoProject />
        <FutureBlockchainSurvey />
      </div>
    </div>
  );
}
