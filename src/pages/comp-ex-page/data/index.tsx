export type AttributeType = {
  key: string;
  attributeCount: number;
  kind: 'string';
  values: {
    count: number;
    value: string;
    floorAskPrice?: {
      currency: {
        contract: string;
        name: string;
        symbol: 'ETH' | (string & {});
        decimals: number;
      };
      amount?: {
        raw: string;
        decimal: number;
        usd: number;
        native: number;
      };
    };
  }[];
};

export const ALL_ATTRIBUTES: {
  attributes: AttributeType[];
} = {
  attributes: [
    {
      key: 'Trait Count',
      attributeCount: 4,
      kind: 'string',
      values: [
        {
          count: 5326,
          value: '6',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13569000000000000000',
              decimal: 13.569,
              usd: 49435.67103,
              native: 13.569,
            },
          },
        },
        {
          count: 254,
          value: '4',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '19949000000000000000',
              decimal: 19.949,
              usd: 72679.79964,
              native: 19.949,
            },
          },
        },
        {
          count: 2541,
          value: '5',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13628600000000000000',
              decimal: 13.6286,
              usd: 49652.81054,
              native: 13.6286,
            },
          },
        },
        {
          count: 1885,
          value: '7',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13597400000000000000',
              decimal: 13.5974,
              usd: 49539.14019,
              native: 13.5974,
            },
          },
        },
      ],
    },
    {
      key: 'ApeCoin Staked',
      attributeCount: 5,
      kind: 'string',
      values: [
        {
          count: 21,
          value: '1 - 10 ApeCoin',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '69690000000000000000',
              decimal: 69.69,
              usd: 253900.20738,
              native: 69.69,
            },
          },
        },
        {
          count: 13,
          value: '10 - 100 ApeCoin',
        },
        {
          count: 6023,
          value: '0 - 1 ApeCoin',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13569000000000000000',
              decimal: 13.569,
              usd: 49435.67103,
              native: 13.569,
            },
          },
        },
        {
          count: 3898,
          value: '1000+ ApeCoin',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14400000000000000000',
              decimal: 14.4,
              usd: 52463.237,
              native: 14.4,
            },
          },
        },
        {
          count: 43,
          value: '100 - 1000 ApeCoin',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '30000000000000000000',
              decimal: 30,
              usd: 109298.41041,
              native: 30,
            },
          },
        },
      ],
    },
    {
      key: 'Eyes',
      attributeCount: 23,
      kind: 'string',
      values: [
        {
          count: 844,
          value: 'Bloodshot',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13997000000000000000',
              decimal: 13.997,
              usd: 50994.99502,
              native: 13.997,
            },
          },
        },
        {
          count: 263,
          value: 'Blindfold',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13570000000000000000',
              decimal: 13.57,
              usd: 49439.31431,
              native: 13.57,
            },
          },
        },
        {
          count: 432,
          value: 'Angry',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '17290000000000000000',
              decimal: 17.29,
              usd: 62992.3172,
              native: 17.29,
            },
          },
        },
        {
          count: 489,
          value: '3d',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13597400000000000000',
              decimal: 13.5974,
              usd: 49539.14019,
              native: 13.5974,
            },
          },
        },
        {
          count: 335,
          value: 'Eyepatch',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14979870000000000000',
              decimal: 14.97987,
              usd: 54575.86597,
              native: 14.97987,
            },
          },
        },
        {
          count: 394,
          value: 'Heart',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14990000000000000000',
              decimal: 14.99,
              usd: 54612.7724,
              native: 14.99,
            },
          },
        },
        {
          count: 151,
          value: 'Holographic',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '16500000000000000000',
              decimal: 16.5,
              usd: 60114.12572,
              native: 16.5,
            },
          },
        },
        {
          count: 221,
          value: 'Hypnotized',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '15250000000000000000',
              decimal: 15.25,
              usd: 55560.02529,
              native: 15.25,
            },
          },
        },
        {
          count: 69,
          value: 'Laser Eyes',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '33690000000000000000',
              decimal: 33.69,
              usd: 122742.11489,
              native: 33.69,
            },
          },
        },
        {
          count: 108,
          value: 'Cyborg',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '26100000000000000000',
              decimal: 26.1,
              usd: 95089.61706,
              native: 26.1,
            },
          },
        },
        {
          count: 350,
          value: 'Robot',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14350000000000000000',
              decimal: 14.35,
              usd: 52281.07298,
              native: 14.35,
            },
          },
        },
        {
          count: 550,
          value: 'Sad',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14283000000000000000',
              decimal: 14.283,
              usd: 52036.9732,
              native: 14.283,
            },
          },
        },
        {
          count: 233,
          value: 'Scumbag',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13569000000000000000',
              decimal: 13.569,
              usd: 49435.67103,
              native: 13.569,
            },
          },
        },
        {
          count: 751,
          value: 'Sleepy',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13597400000000000000',
              decimal: 13.5974,
              usd: 49539.14019,
              native: 13.5974,
            },
          },
        },
        {
          count: 352,
          value: 'Sunglasses',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13976000000000000000',
              decimal: 13.976,
              usd: 50918.48613,
              native: 13.976,
            },
          },
        },
        {
          count: 549,
          value: 'Wide Eyed',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14990000000000000000',
              decimal: 14.99,
              usd: 54612.7724,
              native: 14.99,
            },
          },
        },
        {
          count: 243,
          value: 'X Eyes',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13998000000000000000',
              decimal: 13.998,
              usd: 50998.6383,
              native: 13.998,
            },
          },
        },
        {
          count: 308,
          value: 'Zombie',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14250000000000000000',
              decimal: 14.25,
              usd: 51916.74494,
              native: 14.25,
            },
          },
        },
        {
          count: 408,
          value: 'Crazy',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13628500000000000000',
              decimal: 13.6285,
              usd: 49652.44621,
              native: 13.6285,
            },
          },
        },
        {
          count: 479,
          value: 'Coins',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13598000000000000000',
              decimal: 13.598,
              usd: 49541.32616,
              native: 13.598,
            },
          },
        },
        {
          count: 710,
          value: 'Closed',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13900000000000000000',
              decimal: 13.9,
              usd: 50641.59682,
              native: 13.9,
            },
          },
        },
        {
          count: 1715,
          value: 'Bored',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13628500000000000000',
              decimal: 13.6285,
              usd: 49652.44621,
              native: 13.6285,
            },
          },
        },
        {
          count: 49,
          value: 'Blue Beams',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '198000000000000000000',
              decimal: 198,
              usd: 721369.50871,
              native: 198,
            },
          },
        },
      ],
    },
    {
      key: 'Mouth',
      attributeCount: 33,
      kind: 'string',
      values: [
        {
          count: 505,
          value: 'Dumbfounded',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14750000000000000000',
              decimal: 14.75,
              usd: 53738.38512,
              native: 14.75,
            },
          },
        },
        {
          count: 73,
          value: 'Bored Kazoo',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '16250000000000000000',
              decimal: 16.25,
              usd: 59203.30564,
              native: 16.25,
            },
          },
        },
        {
          count: 88,
          value: 'Bored Party Horn',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '18250000000000000000',
              decimal: 18.25,
              usd: 66489.86633,
              native: 18.25,
            },
          },
        },
        {
          count: 132,
          value: 'Bored Pipe',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '15500000000000000000',
              decimal: 15.5,
              usd: 56470.84538,
              native: 15.5,
            },
          },
        },
        {
          count: 50,
          value: 'Bored Pizza',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '20000000000000000000',
              decimal: 20,
              usd: 72865.60694,
              native: 20,
            },
          },
        },
        {
          count: 1551,
          value: 'Bored Unshaven',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13569000000000000000',
              decimal: 13.569,
              usd: 49435.67103,
              native: 13.569,
            },
          },
        },
        {
          count: 65,
          value: 'Bored Unshaven Bubblegum',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '49000000000000000000',
              decimal: 49,
              usd: 178520.737,
              native: 49,
            },
          },
        },
        {
          count: 94,
          value: 'Bored Unshaven Cigar',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '19200000000000000000',
              decimal: 19.2,
              usd: 69950.98266,
              native: 19.2,
            },
          },
        },
        {
          count: 438,
          value: 'Bored Unshaven Cigarette',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14990000000000000000',
              decimal: 14.99,
              usd: 54612.7724,
              native: 14.99,
            },
          },
        },
        {
          count: 28,
          value: 'Bored Unshaven Dagger',
        },
        {
          count: 61,
          value: 'Bored Unshaven Kazoo',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '15350000000000000000',
              decimal: 15.35,
              usd: 55924.35333,
              native: 15.35,
            },
          },
        },
        {
          count: 45,
          value: 'Bored Unshaven Party horn',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '19990000000000000000',
              decimal: 19.99,
              usd: 72829.17414,
              native: 19.99,
            },
          },
        },
        {
          count: 101,
          value: 'Bored Unshaven Pipe',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14148900000000000000',
              decimal: 14.1489,
              usd: 51548.4093,
              native: 14.1489,
            },
          },
        },
        {
          count: 26,
          value: 'Bored Unshaven Pizza',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '90000000000000000000',
              decimal: 90,
              usd: 327895.23123,
              native: 90,
            },
          },
        },
        {
          count: 208,
          value: 'Discomfort',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '15010000000000000000',
              decimal: 15.01,
              usd: 54685.63801,
              native: 15.01,
            },
          },
        },
        {
          count: 49,
          value: 'Bored Dagger',
        },
        {
          count: 714,
          value: 'Grin',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13597400000000000000',
              decimal: 13.5974,
              usd: 49539.14019,
              native: 13.5974,
            },
          },
        },
        {
          count: 78,
          value: 'Grin Diamond Grill',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '26690000000000000000',
              decimal: 26.69,
              usd: 97239.15246,
              native: 26.69,
            },
          },
        },
        {
          count: 91,
          value: 'Grin Gold Grill',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '18000000000000000000',
              decimal: 18,
              usd: 65579.04625,
              native: 18,
            },
          },
        },
        {
          count: 116,
          value: 'Grin Multicolored',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '19000000000000000000',
              decimal: 19,
              usd: 69222.32659,
              native: 19,
            },
          },
        },
        {
          count: 296,
          value: 'Jovial',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '15000000000000000000',
              decimal: 15,
              usd: 54649.2052,
              native: 15,
            },
          },
        },
        {
          count: 242,
          value: 'Phoneme L',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14250000000000000000',
              decimal: 14.25,
              usd: 51916.74494,
              native: 14.25,
            },
          },
        },
        {
          count: 237,
          value: 'Phoneme Oh',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13628500000000000000',
              decimal: 13.6285,
              usd: 49652.44621,
              native: 13.6285,
            },
          },
        },
        {
          count: 256,
          value: 'Phoneme  ooo',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13976000000000000000',
              decimal: 13.976,
              usd: 50918.48613,
              native: 13.976,
            },
          },
        },
        {
          count: 333,
          value: 'Phoneme Vuh',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '15150000000000000000',
              decimal: 15.15,
              usd: 55195.69726,
              native: 15.15,
            },
          },
        },
        {
          count: 163,
          value: 'Phoneme Wah',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14990000000000000000',
              decimal: 14.99,
              usd: 54612.7724,
              native: 14.99,
            },
          },
        },
        {
          count: 266,
          value: 'Rage',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14550000000000000000',
              decimal: 14.55,
              usd: 53009.72905,
              native: 14.55,
            },
          },
        },
        {
          count: 272,
          value: 'Small Grin',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '15150000000000000000',
              decimal: 15.15,
              usd: 55195.69726,
              native: 15.15,
            },
          },
        },
        {
          count: 202,
          value: 'Tongue Out',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '18569000000000000000',
              decimal: 18.569,
              usd: 67652.07276,
              native: 18.569,
            },
          },
        },
        {
          count: 2275,
          value: 'Bored',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13597400000000000000',
              decimal: 13.5974,
              usd: 49539.14019,
              native: 13.5974,
            },
          },
        },
        {
          count: 119,
          value: 'Bored Bubblegum',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '17500000000000000000',
              decimal: 17.5,
              usd: 63757.40607,
              native: 17.5,
            },
          },
        },
        {
          count: 121,
          value: 'Bored Cigar',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13628500000000000000',
              decimal: 13.6285,
              usd: 49652.44621,
              native: 13.6285,
            },
          },
        },
        {
          count: 710,
          value: 'Bored Cigarette',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13705000000000000000',
              decimal: 13.705,
              usd: 49931.15716,
              native: 13.705,
            },
          },
        },
      ],
    },
    {
      key: 'Background',
      attributeCount: 8,
      kind: 'string',
      values: [
        {
          count: 1172,
          value: 'Gray',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13976000000000000000',
              decimal: 13.976,
              usd: 50918.48613,
              native: 13.976,
            },
          },
        },
        {
          count: 1267,
          value: 'Aquamarine',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13569000000000000000',
              decimal: 13.569,
              usd: 49435.67103,
              native: 13.569,
            },
          },
        },
        {
          count: 1242,
          value: 'Army Green',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13598000000000000000',
              decimal: 13.598,
              usd: 49541.32616,
              native: 13.598,
            },
          },
        },
        {
          count: 1242,
          value: 'Blue',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13628500000000000000',
              decimal: 13.6285,
              usd: 49652.44621,
              native: 13.6285,
            },
          },
        },
        {
          count: 1233,
          value: 'New Punk Blue',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13840000000000000000',
              decimal: 13.84,
              usd: 50423,
              native: 13.84,
            },
          },
        },
        {
          count: 1274,
          value: 'Orange',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13570000000000000000',
              decimal: 13.57,
              usd: 49439.31431,
              native: 13.57,
            },
          },
        },
        {
          count: 1291,
          value: 'Purple',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13597400000000000000',
              decimal: 13.5974,
              usd: 49539.14019,
              native: 13.5974,
            },
          },
        },
        {
          count: 1284,
          value: 'Yellow',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13800000000000000000',
              decimal: 13.8,
              usd: 50277.26879,
              native: 13.8,
            },
          },
        },
      ],
    },
    {
      key: 'Hat',
      attributeCount: 36,
      kind: 'string',
      values: [
        {
          count: 579,
          value: 'Beanie',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13628500000000000000',
              decimal: 13.6285,
              usd: 49652.44621,
              native: 13.6285,
            },
          },
        },
        {
          count: 294,
          value: 'Army Hat',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14600000000000000000',
              decimal: 14.6,
              usd: 53191.89307,
              native: 14.6,
            },
          },
        },
        {
          count: 158,
          value: "Baby's Bonnet",
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14350000000000000000',
              decimal: 14.35,
              usd: 52281.07298,
              native: 14.35,
            },
          },
        },
        {
          count: 89,
          value: 'Bandana Blue',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '30500000000000000000',
              decimal: 30.5,
              usd: 111120.05058,
              native: 30.5,
            },
          },
        },
        {
          count: 231,
          value: 'Bayc Flipped Brim',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '16939000000000000000',
              decimal: 16.939,
              usd: 61713.5258,
              native: 16.939,
            },
          },
        },
        {
          count: 228,
          value: 'Bayc Hat Black',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '16250000000000000000',
              decimal: 16.25,
              usd: 59203.30564,
              native: 16.25,
            },
          },
        },
        {
          count: 119,
          value: 'Bayc Hat Red',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '18450000000000000000',
              decimal: 18.45,
              usd: 67218.5224,
              native: 18.45,
            },
          },
        },
        {
          count: 262,
          value: 'Bowler',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '16000000000000000000',
              decimal: 16,
              usd: 58292.48555,
              native: 16,
            },
          },
        },
        {
          count: 195,
          value: 'Bunny Ears',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13628500000000000000',
              decimal: 13.6285,
              usd: 49652.44621,
              native: 13.6285,
            },
          },
        },
        {
          count: 304,
          value: 'Commie Hat',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13800000000000000000',
              decimal: 13.8,
              usd: 50277.26879,
              native: 13.8,
            },
          },
        },
        {
          count: 353,
          value: 'Cowboy Hat',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14748800000000000000',
              decimal: 14.7488,
              usd: 53734.01318,
              native: 14.7488,
            },
          },
        },
        {
          count: 136,
          value: 'Faux Hawk',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '24999999000000000000',
              decimal: 25,
              usd: 91082.00503,
              native: 25,
            },
          },
        },
        {
          count: 377,
          value: 'Fez',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13597400000000000000',
              decimal: 13.5974,
              usd: 49539.14019,
              native: 13.5974,
            },
          },
        },
        {
          count: 344,
          value: "Fisherman's Hat",
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14140000000000000000',
              decimal: 14.14,
              usd: 51515.98411,
              native: 14.14,
            },
          },
        },
        {
          count: 105,
          value: "Girl's Hair Pink",
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13628600000000000000',
              decimal: 13.6286,
              usd: 49652.81054,
              native: 13.6286,
            },
          },
        },
        {
          count: 150,
          value: "Girl's Hair Short",
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13998000000000000000',
              decimal: 13.998,
              usd: 50998.6383,
              native: 13.998,
            },
          },
        },
        {
          count: 324,
          value: 'Halo',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14990000000000000000',
              decimal: 14.99,
              usd: 54612.7724,
              native: 14.99,
            },
          },
        },
        {
          count: 252,
          value: 'Horns',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '15790000000000000000',
              decimal: 15.79,
              usd: 57527.39668,
              native: 15.79,
            },
          },
        },
        {
          count: 225,
          value: 'Irish Boho',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '15000000000000000000',
              decimal: 15,
              usd: 54649.2052,
              native: 15,
            },
          },
        },
        {
          count: 77,
          value: "King's Crown",
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '36990000000000000000',
              decimal: 36.99,
              usd: 134764.94004,
              native: 36.99,
            },
          },
        },
        {
          count: 72,
          value: 'Laurel Wreath',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13900000000000000000',
              decimal: 13.9,
              usd: 50641.59682,
              native: 13.9,
            },
          },
        },
        {
          count: 121,
          value: 'Party Hat 1',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14979800000000000000',
              decimal: 14.9798,
              usd: 54575.61094,
              native: 14.9798,
            },
          },
        },
        {
          count: 107,
          value: 'Party Hat 2',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13598000000000000000',
              decimal: 13.598,
              usd: 49541.32616,
              native: 13.598,
            },
          },
        },
        {
          count: 130,
          value: 'Police Motorcycle Helmet',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13597400000000000000',
              decimal: 13.5974,
              usd: 49539.14019,
              native: 13.5974,
            },
          },
        },
        {
          count: 130,
          value: 'Prussian Helmet',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13976000000000000000',
              decimal: 13.976,
              usd: 50918.48613,
              native: 13.976,
            },
          },
        },
        {
          count: 182,
          value: 'Safari',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14283000000000000000',
              decimal: 14.283,
              usd: 52036.9732,
              native: 14.283,
            },
          },
        },
        {
          count: 306,
          value: "Sea Captain's Hat",
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '16000000000000000000',
              decimal: 16,
              usd: 58292.48555,
              native: 16,
            },
          },
        },
        {
          count: 420,
          value: "Seaman's Hat",
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14980000000000000000',
              decimal: 14.98,
              usd: 54576.3396,
              native: 14.98,
            },
          },
        },
        {
          count: 318,
          value: 'Short Mohawk',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13569000000000000000',
              decimal: 13.569,
              usd: 49435.67103,
              native: 13.569,
            },
          },
        },
        {
          count: 235,
          value: 'S&m Hat',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13840000000000000000',
              decimal: 13.84,
              usd: 50423,
              native: 13.84,
            },
          },
        },
        {
          count: 182,
          value: 'Spinner Hat',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13997000000000000000',
              decimal: 13.997,
              usd: 50994.99502,
              native: 13.997,
            },
          },
        },
        {
          count: 157,
          value: 'Stuntman Helmet',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '90000000000000000000',
              decimal: 90,
              usd: 327895.23123,
              native: 90,
            },
          },
        },
        {
          count: 188,
          value: 'Sushi Chef Headband',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13570000000000000000',
              decimal: 13.57,
              usd: 49439.31431,
              native: 13.57,
            },
          },
        },
        {
          count: 65,
          value: "Trippy Captain's Hat",
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '70000000000000000000',
              decimal: 70,
              usd: 255029.62429,
              native: 70,
            },
          },
        },
        {
          count: 222,
          value: 'Vietnam Era Helmet',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14400000000000000000',
              decimal: 14.4,
              usd: 52463.237,
              native: 14.4,
            },
          },
        },
        {
          count: 110,
          value: 'Ww2 Pilot Helm',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14148900000000000000',
              decimal: 14.1489,
              usd: 51548.4093,
              native: 14.1489,
            },
          },
        },
      ],
    },
    {
      key: 'Clothes',
      attributeCount: 43,
      kind: 'string',
      values: [
        {
          count: 283,
          value: 'Hawaiian',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14600000000000000000',
              decimal: 14.6,
              usd: 53191.89307,
              native: 14.6,
            },
          },
        },
        {
          count: 128,
          value: 'Hip Hop',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '15000000000000000000',
              decimal: 15,
              usd: 54649.2052,
              native: 15,
            },
          },
        },
        {
          count: 68,
          value: 'Kings Robe',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '27500000000000000000',
              decimal: 27.5,
              usd: 100190.20954,
              native: 27.5,
            },
          },
        },
        {
          count: 144,
          value: 'Lab Coat',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14480000000000000000',
              decimal: 14.48,
              usd: 52754.69942,
              native: 14.48,
            },
          },
        },
        {
          count: 207,
          value: 'Leather Jacket',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13840000000000000000',
              decimal: 13.84,
              usd: 50423,
              native: 13.84,
            },
          },
        },
        {
          count: 153,
          value: 'Leather Punk Jacket',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '20000000000000000000',
              decimal: 20,
              usd: 72865.60694,
              native: 20,
            },
          },
        },
        {
          count: 213,
          value: 'Lumberjack Shirt',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14489990000000000000',
              decimal: 14.48999,
              usd: 52791.0958,
              native: 14.48999,
            },
          },
        },
        {
          count: 335,
          value: 'Navy Striped Tee',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14748800000000000000',
              decimal: 14.7488,
              usd: 53734.01318,
              native: 14.7488,
            },
          },
        },
        {
          count: 80,
          value: 'Pimp Coat',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '18750000000000000000',
              decimal: 18.75,
              usd: 68311.50651,
              native: 18.75,
            },
          },
        },
        {
          count: 235,
          value: 'Prison Jumpsuit',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13976000000000000000',
              decimal: 13.976,
              usd: 50918.48613,
              native: 13.976,
            },
          },
        },
        {
          count: 103,
          value: 'Prom Dress',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '16000000000000000000',
              decimal: 16,
              usd: 58292.48555,
              native: 16,
            },
          },
        },
        {
          count: 226,
          value: 'Puffy Vest',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13900000000000000000',
              decimal: 13.9,
              usd: 50641.59682,
              native: 13.9,
            },
          },
        },
        {
          count: 135,
          value: 'Rainbow Suspenders',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '15075400000000000000',
              decimal: 15.0754,
              usd: 54923.90854,
              native: 15.0754,
            },
          },
        },
        {
          count: 284,
          value: 'Sailor Shirt',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14490000000000000000',
              decimal: 14.49,
              usd: 52791.13223,
              native: 14.49,
            },
          },
        },
        {
          count: 142,
          value: 'Service',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '26700000000000000000',
              decimal: 26.7,
              usd: 97275.58526,
              native: 26.7,
            },
          },
        },
        {
          count: 144,
          value: 'Sleeveless Logo T',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13628500000000000000',
              decimal: 13.6285,
              usd: 49652.44621,
              native: 13.6285,
            },
          },
        },
        {
          count: 251,
          value: 'Sleeveless T',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13570000000000000000',
              decimal: 13.57,
              usd: 49439.31431,
              native: 13.57,
            },
          },
        },
        {
          count: 221,
          value: 'Smoking Jacket',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13598000000000000000',
              decimal: 13.598,
              usd: 49541.32616,
              native: 13.598,
            },
          },
        },
        {
          count: 105,
          value: 'Space Suit',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '18500000000000000000',
              decimal: 18.5,
              usd: 67400.68642,
              native: 18.5,
            },
          },
        },
        {
          count: 412,
          value: 'Striped Tee',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14990000000000000000',
              decimal: 14.99,
              usd: 54612.7724,
              native: 14.99,
            },
          },
        },
        {
          count: 178,
          value: 'Stunt Jacket',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14990000000000000000',
              decimal: 14.99,
              usd: 54612.7724,
              native: 14.99,
            },
          },
        },
        {
          count: 235,
          value: 'Tanktop',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14350000000000000000',
              decimal: 14.35,
              usd: 52281.07298,
              native: 14.35,
            },
          },
        },
        {
          count: 144,
          value: 'Tie Dye',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '15500000000000000000',
              decimal: 15.5,
              usd: 56470.84538,
              native: 15.5,
            },
          },
        },
        {
          count: 202,
          value: 'Toga',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '16000000000000000000',
              decimal: 16,
              usd: 58292.48555,
              native: 16,
            },
          },
        },
        {
          count: 235,
          value: 'Tuxedo Tee',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14250000000000000000',
              decimal: 14.25,
              usd: 51916.74494,
              native: 14.25,
            },
          },
        },
        {
          count: 141,
          value: 'Tweed Suit',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '18000000000000000000',
              decimal: 18,
              usd: 65579.04625,
              native: 18,
            },
          },
        },
        {
          count: 224,
          value: 'Vietnam Jacket',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13569000000000000000',
              decimal: 13.569,
              usd: 49435.67103,
              native: 13.569,
            },
          },
        },
        {
          count: 240,
          value: 'Wool Turtleneck',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '18888000000000000000',
              decimal: 18.888,
              usd: 68814.27919,
              native: 18.888,
            },
          },
        },
        {
          count: 188,
          value: 'Work Vest',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13705000000000000000',
              decimal: 13.705,
              usd: 49931.15716,
              native: 13.705,
            },
          },
        },
        {
          count: 233,
          value: 'Guayabera',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '15690000000000000000',
              decimal: 15.69,
              usd: 57163.06864,
              native: 15.69,
            },
          },
        },
        {
          count: 119,
          value: 'Cowboy Shirt',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '17690000000000000000',
              decimal: 17.69,
              usd: 64449.62934,
              native: 17.69,
            },
          },
        },
        {
          count: 163,
          value: 'Caveman Pelt',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14199000000000000000',
              decimal: 14.199,
              usd: 51730.93765,
              native: 14.199,
            },
          },
        },
        {
          count: 230,
          value: 'Bone Tee',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '17400000000000000000',
              decimal: 17.4,
              usd: 63393.07804,
              native: 17.4,
            },
          },
        },
        {
          count: 204,
          value: 'Bone Necklace',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '19690000000000000000',
              decimal: 19.69,
              usd: 71736.19003,
              native: 19.69,
            },
          },
        },
        {
          count: 96,
          value: 'Blue Dress',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14979870000000000000',
              decimal: 14.97987,
              usd: 54575.86597,
              native: 14.97987,
            },
          },
        },
        {
          count: 334,
          value: 'Black T',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '15150000000000000000',
              decimal: 15.15,
              usd: 55195.69726,
              native: 15.15,
            },
          },
        },
        {
          count: 42,
          value: 'Black Suit',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '88888000000000000000',
              decimal: 88.888,
              usd: 323843.90348,
              native: 88.888,
            },
          },
        },
        {
          count: 205,
          value: 'Black Holes T',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14730000000000000000',
              decimal: 14.73,
              usd: 53665.51951,
              native: 14.73,
            },
          },
        },
        {
          count: 253,
          value: 'Biker Vest',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13597400000000000000',
              decimal: 13.5974,
              usd: 49539.14019,
              native: 13.5974,
            },
          },
        },
        {
          count: 140,
          value: 'Bayc T Red',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14283000000000000000',
              decimal: 14.283,
              usd: 52036.9732,
              native: 14.283,
            },
          },
        },
        {
          count: 215,
          value: 'Bayc T Black',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13628500000000000000',
              decimal: 13.6285,
              usd: 49652.44621,
              native: 13.6285,
            },
          },
        },
        {
          count: 163,
          value: 'Bandolier',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13800000000000000000',
              decimal: 13.8,
              usd: 50277.26879,
              native: 13.8,
            },
          },
        },
        {
          count: 64,
          value: 'Admirals Coat',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '18250000000000000000',
              decimal: 18.25,
              usd: 66489.86633,
              native: 18.25,
            },
          },
        },
      ],
    },
    {
      key: 'Earring',
      attributeCount: 6,
      kind: 'string',
      values: [
        {
          count: 883,
          value: 'Silver Hoop',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13597400000000000000',
              decimal: 13.5974,
              usd: 49539.14019,
              native: 13.5974,
            },
          },
        },
        {
          count: 149,
          value: 'Cross',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '20000000000000000000',
              decimal: 20,
              usd: 72865.60694,
              native: 20,
            },
          },
        },
        {
          count: 222,
          value: 'Diamond Stud',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '16690000000000000000',
              decimal: 16.69,
              usd: 60806.34899,
              native: 16.69,
            },
          },
        },
        {
          count: 462,
          value: 'Gold Hoop',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13597400000000000000',
              decimal: 13.5974,
              usd: 49539.14019,
              native: 13.5974,
            },
          },
        },
        {
          count: 824,
          value: 'Silver Stud',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13598000000000000000',
              decimal: 13.598,
              usd: 49541.32616,
              native: 13.598,
            },
          },
        },
        {
          count: 439,
          value: 'Gold Stud',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13628500000000000000',
              decimal: 13.6285,
              usd: 49652.44621,
              native: 13.6285,
            },
          },
        },
      ],
    },
    {
      key: 'Fur',
      attributeCount: 19,
      kind: 'string',
      values: [
        {
          count: 215,
          value: 'Dmt',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '15075400000000000000',
              decimal: 15.0754,
              usd: 54923.90854,
              native: 15.0754,
            },
          },
        },
        {
          count: 779,
          value: 'Golden Brown',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13569000000000000000',
              decimal: 13.569,
              usd: 49435.67103,
              native: 13.569,
            },
          },
        },
        {
          count: 496,
          value: 'Gray',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13628500000000000000',
              decimal: 13.6285,
              usd: 49652.44621,
              native: 13.6285,
            },
          },
        },
        {
          count: 155,
          value: 'Noise',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '16180000000000000000',
              decimal: 16.18,
              usd: 58948.27601,
              native: 16.18,
            },
          },
        },
        {
          count: 511,
          value: 'Pink',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14990000000000000000',
              decimal: 14.99,
              usd: 54612.7724,
              native: 14.99,
            },
          },
        },
        {
          count: 473,
          value: 'Red',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13705000000000000000',
              decimal: 13.705,
              usd: 49931.15716,
              native: 13.705,
            },
          },
        },
        {
          count: 265,
          value: 'Robot',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14979870000000000000',
              decimal: 14.97987,
              usd: 54575.86597,
              native: 14.97987,
            },
          },
        },
        {
          count: 46,
          value: 'Solid Gold',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '342069000000000000000',
              decimal: 342.069,
              usd: 1246253.26502,
              native: 342.069,
            },
          },
        },
        {
          count: 1230,
          value: 'Black',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13597400000000000000',
              decimal: 13.5974,
              usd: 49539.14019,
              native: 13.5974,
            },
          },
        },
        {
          count: 625,
          value: 'Tan',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13628600000000000000',
              decimal: 13.6286,
              usd: 49652.81054,
              native: 13.6286,
            },
          },
        },
        {
          count: 302,
          value: 'Zombie',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14400000000000000000',
              decimal: 14.4,
              usd: 52463.237,
              native: 14.4,
            },
          },
        },
        {
          count: 398,
          value: 'White',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14140000000000000000',
              decimal: 14.14,
              usd: 51515.98411,
              native: 14.14,
            },
          },
        },
        {
          count: 77,
          value: 'Trippy',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '57000000000000000000',
              decimal: 57,
              usd: 207666.97978,
              native: 57,
            },
          },
        },
        {
          count: 490,
          value: 'Blue',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14550000000000000000',
              decimal: 14.55,
              usd: 53009.72905,
              native: 14.55,
            },
          },
        },
        {
          count: 1371,
          value: 'Brown',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13597400000000000000',
              decimal: 13.5974,
              usd: 49539.14019,
              native: 13.5974,
            },
          },
        },
        {
          count: 405,
          value: 'Cheetah',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13998000000000000000',
              decimal: 13.998,
              usd: 50998.6383,
              native: 13.998,
            },
          },
        },
        {
          count: 637,
          value: 'Cream',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '14283000000000000000',
              decimal: 14.283,
              usd: 52036.9732,
              native: 14.283,
            },
          },
        },
        {
          count: 1354,
          value: 'Dark Brown',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '13570000000000000000',
              decimal: 13.57,
              usd: 49439.31431,
              native: 13.57,
            },
          },
        },
        {
          count: 175,
          value: 'Death Bot',
          floorAskPrice: {
            currency: {
              contract:
                '0x0000000000000000000000000000000000000000',
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            amount: {
              raw: '23316600000000000000',
              decimal: 23.3166,
              usd: 84948.91054,
              native: 23.3166,
            },
          },
        },
      ],
    },
  ],
};
