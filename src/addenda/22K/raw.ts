import { DeepPartial } from "../../common";

const fields = {
  water_info: {
    kind: "string",
    value: "Seattle Public Utilities Name e-mail or website (optional) Address",
    boundingRegions: [
      {
        pageNumber: 16,
        polygon: [
          {
            x: 3.0524,
            y: 2.884,
          },
          {
            x: 7.6611,
            y: 2.9061,
          },
          {
            x: 7.6583,
            y: 3.4861,
          },
          {
            x: 3.0496,
            y: 3.464,
          },
        ],
      },
    ],
    content:
      "Seattle Public Utilities\nName\ne-mail or website (optional)\nAddress",
    spans: [
      {
        offset: 885,
        length: 24,
      },
      {
        offset: 937,
        length: 41,
      },
    ],
    confidence: 0.719,
  },
  sewer_info: {
    kind: "string",
    value:
      "Citv. State. Zip Fax. No. (optional) Seattle Public Utilities Name e-mail or website (optional) Address",
    boundingRegions: [
      {
        pageNumber: 16,
        polygon: [
          {
            x: 3.0282,
            y: 3.602,
          },
          {
            x: 7.6758,
            y: 3.6238,
          },
          {
            x: 7.6726,
            y: 4.3043,
          },
          {
            x: 3.025,
            y: 4.2824,
          },
        ],
      },
    ],
    content:
      "Citv. State. Zip Seattle Public Utilities\nFax. No. (optional)\nName\ne-mail or website (optional)\nAddress",
    spans: [
      {
        offset: 979,
        length: 103,
      },
    ],
    confidence: 0.62,
  },
  irrigation_info: {
    kind: "string",
    value:
      "City, State, Zip Fax. No. (optional) Name e-mail or website (optional) Address",
    boundingRegions: [
      {
        pageNumber: 16,
        polygon: [
          {
            x: 3.0514,
            y: 4.4353,
          },
          {
            x: 7.6596,
            y: 4.4353,
          },
          {
            x: 7.6596,
            y: 5.099,
          },
          {
            x: 3.0514,
            y: 5.099,
          },
        ],
      },
    ],
    content:
      "City, State, Zip\nFax. No. (optional)\nName\ne-mail or website (optional)\nAddress",
    spans: [
      {
        offset: 1083,
        length: 78,
      },
    ],
    confidence: 0.55,
  },
  garbage_info: {
    kind: "string",
    value:
      "Citv. State. Zip Seattle Public Utilties Fax. No. (optional) Name e-mail or website (optional) Address",
    boundingRegions: [
      {
        pageNumber: 16,
        polygon: [
          {
            x: 3.0536,
            y: 5.2265,
          },
          {
            x: 7.6761,
            y: 5.2518,
          },
          {
            x: 7.6724,
            y: 5.9358,
          },
          {
            x: 3.0499,
            y: 5.9105,
          },
        ],
      },
    ],
    content:
      "Citv. State. Zip Seattle Public Utilties\nFax. No. (optional)\nName\ne-mail or website (optional)\nAddress",
    spans: [
      {
        offset: 1162,
        length: 102,
      },
    ],
    confidence: 0.66,
  },
  electric_info: {
    kind: "string",
    value:
      "City Stato 7in Seattle City Light Fax. No. (optional) Name e-mail or website (optional) Address",
    boundingRegions: [
      {
        pageNumber: 16,
        polygon: [
          {
            x: 3.0514,
            y: 6.0538,
          },
          {
            x: 7.6787,
            y: 6.0538,
          },
          {
            x: 7.6787,
            y: 6.727,
          },
          {
            x: 3.0514,
            y: 6.727,
          },
        ],
      },
    ],
    content:
      "City Stato 7in Seattle City Light\nFax. No. (optional)\nName\ne-mail or website (optional)\nAddress",
    spans: [
      {
        offset: 1265,
        length: 95,
      },
    ],
    confidence: 0.717,
  },
  gas_info: {
    kind: "string",
    value:
      "Citv. State. Zip Fax. No. (optional) PSE Name e-mail or website (optional) Address",
    boundingRegions: [
      {
        pageNumber: 16,
        polygon: [
          {
            x: 3.0514,
            y: 6.8798,
          },
          {
            x: 7.6691,
            y: 6.8798,
          },
          {
            x: 7.6691,
            y: 7.5386,
          },
          {
            x: 3.0514,
            y: 7.5386,
          },
        ],
      },
    ],
    content:
      "Citv. State. Zip PSE\nFax. No. (optional)\nName\ne-mail or website (optional)\nAddress",
    spans: [
      {
        offset: 1361,
        length: 82,
      },
    ],
    confidence: 0.775,
  },
  special_info: {
    kind: "string",
    value:
      "City, State, Zip Fax. No. (optional) Name e-mail or website (optional) Address",
    boundingRegions: [
      {
        pageNumber: 16,
        polygon: [
          {
            x: 3.0489,
            y: 7.6619,
          },
          {
            x: 7.6769,
            y: 7.6964,
          },
          {
            x: 7.6718,
            y: 8.3861,
          },
          {
            x: 3.0438,
            y: 8.3516,
          },
        ],
      },
    ],
    content:
      "City, State, Zip\nFax. No. (optional)\nName\ne-mail or website (optional)\nAddress",
    spans: [
      {
        offset: 1444,
        length: 78,
      },
    ],
    confidence: 0.78,
  },
  days_provide_info: {
    kind: "string",
    confidence: 0.463,
  },
};

export type RawUtilitiesDocument = DeepPartial<typeof fields>;
