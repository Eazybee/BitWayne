import AppleItunesCard from '<assests>/images/apple_store_itunes.jpg';
import AppleStoresCard from '<assests>/images/apple_store.jpg';
import OffGamesCard from '<assests>/images/offgames.png';
import EbayCard from '<assests>/images/ebay.jpg';
import Amazon from '<assests>/images/amazon.jpg';
import Steam from '<assests>/images/steam.jpg';
import GooglePlay from '<assests>/images/google_play.jpg';
import VisaCard from '<assests>/images/visa.jpg';
import MacyCard from '<assests>/images/macy.jpg';
import SephoraCard from '<assests>/images/sephora.jpg';
import NikeCard from '<assests>/images/nike.jpg';
import OneVanilla from '<assests>/images/vanila.jpg';
import Master from '<assests>/images/master.jpg';
import Itunes1 from '<assests>/images/card_sample/itunes1.jpg';
import Itunes2 from '<assests>/images/card_sample/itunes2.jpg';
import Steam1 from '<assests>/images/card_sample/steam1.jpg';
import Steam2 from '<assests>/images/card_sample/steam2.jpg';
import Amazon1 from '<assests>/images/card_sample/amazon1.jpg';
import Amazon2 from '<assests>/images/card_sample/amazon2.jpg';
import Ebay from '<assests>/images/card_sample/ebay.jpg';
import GooglePlay1 from '<assests>/images/card_sample/google_play.jpg';
import OneVanilla1 from '<assests>/images/card_sample/onevanila.jpg';
import Master1 from '<assests>/images/card_sample/master.jpg';
import Macy1 from '<assests>/images/card_sample/macy.jpg';
import Sephora1 from '<assests>/images/card_sample/sephora.jpg';
import Nike1 from '<assests>/images/card_sample/nike1.jpg';
import Nike2 from '<assests>/images/card_sample/nike2.jpg';
import OffGames1 from '<assests>/images/card_sample/offgames.jpg';
import { Countries } from '<helpers>/typings';


const cards = [
  {
    imgSrc: AppleItunesCard,
    title: 'ITUNES GIFT CARD',
    countries: [
      Countries.USA, Countries.UK, Countries.SIGNAPORE, Countries.CANADA, Countries.EUROPEAN_UNION,
      Countries.MEXICO, Countries.JAPAN,
    ],
    info: {
      heading: 'ITUNES GIFT CARD',
      introductions: [
        'Amazon Giftcards are used to make purchases on Amazon sites. They are non-reloadable and carry specific amounts within them',
        'Amazon cards ranges from different countries and different denominations.',
        'Because it is used for purchases online, this card takes between 5-30min to redeem.',
      ],
      requirements: [
        'We redeem denominations of $25-$500 of which all denominations carry equal price values.',
        'Usually this takes less than 5min to redeem',
        'Note: Google play store cards are prone to Google errors, so if your card says we need more info to redeem, kindly note that we can\'t use the card. You can return it back to the store for replacement',
        'Kindly state the country before dropping the card.',
      ],
      images: [
        Itunes1, Itunes2,
      ],
      onClick: () => {},
    },
  },
  {
    imgSrc: EbayCard,
    title: 'EBAY GIFT CARD',
    countries: [
      Countries.UK, Countries.MEXICO, Countries.USA, Countries.AUSTRALIA, Countries.CANADA,
    ],
    info: {
      heading: 'EBAY GIFT CARD',
      introductions: [
        'eBay gift cards are used to make purchases on eBay. They are non-reloadable and carry specific amounts within them.',
        'Because it is used for purchases online, this card takes between 5-30min to redeem.',
      ],
      requirements: [
        'We buy denominations ranging from $50-$500 with higher denominations having better price values than lower denominations',
        'Click on the link to confirm the card balance https://www.ebay.com/gft/balance',
      ],
      images: [Ebay],
      onClick: () => {},
    },
  },
  {
    imgSrc: Amazon,
    title: 'AMAZON GIFT CARD',
    countries: [
      Countries.UK, Countries.MEXICO, Countries.USA, Countries.AUSTRALIA, Countries.CANADA,
    ],
    info: {
      heading: 'AMAZON GIFT CARD',
      introductions: [
        'Amazon Giftcards are used to make purchases on Amazon sites. They are non-reloadable and carry specific amounts within them.',
        'Amazon cards ranges from different countries and different denominations.',
        'Because it is used for purchases online, this card takes between 5-30min to redeem.',
      ],
      requirements: [
        'We buy denominations ranging from $50-$500 with lower denominations of $50-$100 having the best price values than higher denominations of $300-$500.',
        'Card must start with "AQ"',
        'Note: We only accept cash receipts for USA amazons due to issues of charge backs.',
      ],
      images: [Amazon1, Amazon2],
      onClick: () => {},
    },
  },
  {
    imgSrc: Steam,
    title: 'STEAM CARD',
    countries: [
      Countries.UK, Countries.MEXICO, Countries.USA, Countries.AUSTRALIA, Countries.CANADA,
    ],
    info: {
      heading: 'STEAM CARD',
      introductions: [
        'Steam Gift Cards work just like gift certificates, which can be redeemed on Steam network for the purchase of games, software, and any other item you can purchase on Steam.',
      ],
      requirements: [
        'We redeem denominations ranging from of $20-$200',
        'Kindly state the country and denomination before dropping the card.',
        'NOTE: Usually this takes less than 5min to redeem',
      ],
      images: [Steam1, Steam2],
      onClick: () => {},
    },
  },
  {
    imgSrc: GooglePlay,
    title: 'GOOGLE PLAY GIFT CARD',
    countries: [
      Countries.UK, Countries.MEXICO, Countries.USA, Countries.AUSTRALIA, Countries.CANADA,
    ],
    info: {
      heading: 'GOOGLE PLAY GIFT CARD',
      introductions: [
        'Google Play card gives you unlimited access to all content available in the Google play Store. This includes apps, games, movies, TV shows, music, magazines and more!',
      ],
      requirements: [
        'We redeem denominations of $25-$500 of which all denominations carry equal price values.',
        'Usually this takes less than 5min to redeem',
        `
         Kindly state the country before dropping the card.
         NOTE: Google play store cards are prone to Google errors, so if your card says we need more info to redeem, kindly note that we can't use the card. You can return it back to the store for replacement.
        `,
      ],
      images: [GooglePlay1],
      onClick: () => {},
    },
  },
  {
    imgSrc: OneVanilla,
    title: 'ONEVANILLA GIFT CARD',
    countries: [
      Countries.UK, Countries.MEXICO, Countries.USA, Countries.AUSTRALIA, Countries.CANADA,
    ],
    info: {
      heading: 'ONEVANILLA GIFT CARD',
      introductions: [
        'Onevanilla gift card is a prepaid card that serves as a secure and convenient way to trade safe online. It is a reloadable alternative to a regular bank account. It is a card that is used for money management.',
        'Because it is a prepaid card that needs to be used, this card takes between 2-3hrs to redeem in the store.',
      ],
      requirements: [
        'We need OneVanilla Giftcards with start code "4941" "4847" "5432" "5164" "4941" and "4142" respectively.',
        'We buy denominations ranging from $100-$500.',
      ],
      images: [OneVanilla1],
      onClick: () => {},
    },
  },
  {
    imgSrc: VisaCard,
    title: 'VISA GIFT CARD',
    countries: [
      Countries.UK, Countries.MEXICO, Countries.USA, Countries.AUSTRALIA, Countries.CANADA,
    ],
    info: {
      heading: 'VISA GIFT CARD',
      introductions: [
        'Visa gift cards are pre-loaded cards. It can be used at most places Visa®️ debit cards are accepted. Because it\'s a prepaid card, spending is limited to the amount of money on the card.',
        'Because it is a prepaid card, it usually takes 2-3hrs to redeem.',
      ],
      requirements: [
        'We accept Visa gift card with start code "4034" or "4358" or "4852"',
        'We buy denominations ranging from $100-$500 with higher denominations of $300-$500 having the best rates',
      ],
      images: [VisaCard],
      onClick: () => {},
    },
  },
  {
    imgSrc: Master,
    title: 'MASTER GIFT CARD',
    countries: [
      Countries.UK, Countries.MEXICO, Countries.USA, Countries.AUSTRALIA, Countries.CANADA,
    ],
    info: {
      heading: 'MASTER GIFT CARD',
      introductions: [
        'Master card gift cards are pre-loaded cards. It can be used at most places Master card®️ debit cards are accepted. Because it\'s a prepaid card, spending is limited to the amount of money on the card.',
        'Because it is a prepaid card, it usually takes 2-3hrs to redeem.',
      ],
      requirements: [
        'We accept Master gift card with start code "5113"',
        'We buy denominations ranging from $100-$500 with higher denominations of $300-$500 having the best rates',
      ],
      images: [Master1],
      onClick: () => {},
    },
  },
  {
    imgSrc: MacyCard,
    title: 'MACY GIFT CARD',
    countries: [
      Countries.UK, Countries.MEXICO, Countries.USA, Countries.AUSTRALIA, Countries.CANADA,
    ],
    info: {
      heading: 'MACY GIFT CARD',
      introductions: [
        'Macy gift cards are used to make purchases on Macy stores. They are non-reloadable and carry specific amounts within them.',
        'Because it is used for purchases online, this card takes between 1-2hrs to redeem.',
      ],
      requirements: [
        'We buy denominations ranging from $100-$500 with higher denominations having better price values than lower denominations',
      ],
      images: [Macy1],
      onClick: () => {},
    },
  },
  {
    imgSrc: SephoraCard,
    title: 'SEPHORA GIFT CARD',
    countries: [
      Countries.UK, Countries.MEXICO, Countries.USA, Countries.AUSTRALIA, Countries.CANADA,
    ],
    info: {
      heading: 'SEPHORA GIFT CARD',
      introductions: [
        'Sephora gift cards are used to make purchases on Sephora stores which is an online beauty store or in JC Penny stores. They are non-reloadable and carry specific amounts within them.',
        'Because it is used for purchases online, this card takes between 2-3hrs to redeem.',
      ],
      requirements: [
        'We buy denominations ranging from $100-$500 only.',
      ],
      images: [Sephora1],
      onClick: () => {},
    },
  },
  {
    imgSrc: NikeCard,
    title: 'NIKE GIFT CARD',
    countries: [
      Countries.UK, Countries.MEXICO, Countries.USA, Countries.AUSTRALIA, Countries.CANADA,
    ],
    info: {
      heading: 'NIKE GIFT CARD',
      introductions: [
        'Nike gift cards are used to make purchases on Nike stores. They are non-reloadable and carry specific amounts within them.',
        'Because it is used for purchases online, this card takes between 1-3hrs to redeem.',
      ],
      requirements: [
        'We buy $500 only.',
        'Confirm your card balance at https://www.nike.com/orders/gift-card-lookup',
      ],
      images: [Nike1, Nike2],
      onClick: () => {},
    },
  },
  {
    imgSrc: AppleStoresCard,
    title: 'APPLE STORE GIFT CARD',
    countries: [
      Countries.UK, Countries.MEXICO, Countries.USA, Countries.AUSTRALIA, Countries.CANADA,
    ],
    info: {
      heading: 'APPLE STORE GIFT CARD',
      introductions: [
        'Apple Store Gift Cards can be used for lots of Apple products, including music, movies, books, games, apps, accessories and more from the App Store, iBooks or iTunes on Apple online stores or Apple retail stores hence usually takes about 1-3hrs to be used on store.',
      ],
      requirements: [
        'We buy denominations ranging from $500-$2000',
      ],
      images: [],
      onClick: () => {},
    },
  },
  {
    imgSrc: OffGamesCard,
    title: 'OFF GAMER GIFT CARD',
    countries: [
      Countries.UK, Countries.MEXICO, Countries.USA, Countries.AUSTRALIA, Countries.CANADA,
    ],
    info: {
      heading: 'OFF GAMER GIFT CARD',
      introductions: [
        'OffGamers Gift Card (US) solution is designed to replace the traditional gift certificates and offers excellent conveniences to all users on Offgamers site and other gaming site.',
      ],
      requirements: [
        'We buy denominations ranging from $500-$2000',
      ],
      images: [OffGames1],
      onClick: () => {},
    },
  },
];

export default cards;
