import {
  CashDisabledDarkSVG,
  CashDisabledLightSVG,
  CashEnabledDarkSVG,
  CashEnabledLightSVG,
  RefDisabledDarkSVG,
  RefDisabledLightSVG,
  RefEnabledDarkSVG,
  RefEnabledLightSVG,
  UnitDisabledDarkSVG,
  UnitDisabledLightSVG,
  UnitEnabledDarkSVG,
  UnitEnabledLightSVG,
} from "../../../assets/svg";

export const packages = [
  {
    name: "Standard",
    fromMoney: 100,
    value: 25,
    privileges: [
      {
        name: "referal",
        value: 1,
        isActive: false,
        asset:{
          dark:<RefDisabledDarkSVG />,
          light:<RefDisabledLightSVG />
        }
      },
      {
        name: "unit",
        value: 50,
        isActive: false,
        asset:{
          dark:<UnitDisabledDarkSVG />,
          light:<UnitDisabledLightSVG />
        }
      },
      {
        name: "cashback",
        value: 1,
        isActive: false,
        asset:{
          dark:<CashDisabledDarkSVG />,
          light:<CashDisabledLightSVG />
        }
      },
    ],
  },
  {
    name: "Premier",
    fromMoney: 1000,
    value: 50,
    privileges: [
      {
        name: "referal",
        value: 1,
        isActive: true,
        asset:{
          dark:<RefEnabledDarkSVG />,
          light:<RefEnabledLightSVG />
        }
      },
      {
        name: "unit",
        value: 50,
        isActive: true,
        asset:{
          dark:<UnitEnabledDarkSVG />,
          light:<UnitEnabledLightSVG />
        }
      },
      {
        name: "cashback",
        value: 1,
        isActive: false,
        asset:{
          dark:<CashDisabledDarkSVG />,
          light:<CashDisabledLightSVG />
        }
      },
    ],
  },
  {
    name: "Business",
    fromMoney: 5000,
    value: 75,
    privileges: [
      {
        name: "referal",
        value: 1,
        isActive: true,
        asset:{
          dark:<RefEnabledDarkSVG />,
          light:<RefEnabledLightSVG />
        }
      },
      {
        name: "unit",
        value: 100,
        isActive: true,
        asset:{
          dark:<UnitEnabledDarkSVG />,
          light:<UnitEnabledLightSVG />
        }
      },
      {
        name: "cashback",
        value: 1,
        isActive: false,
        asset:{
          dark:<CashDisabledDarkSVG />,
          light:<CashDisabledLightSVG />
        }
      },
    ],
  },
  {
    name: "First Class",
    fromMoney: 10000,
    value: 100,
    privileges: [
      {
        name: "referal",
        value: 2,
        isActive: true,
        asset:{
          dark:<RefEnabledDarkSVG />,
          light:<RefEnabledLightSVG />
        }
      },
      {
        name: "unit",
        value: 750,
        isActive: true,
        asset:{
          dark:<UnitEnabledDarkSVG />,
          light:<UnitEnabledLightSVG />
        }
      },
      {
        name: "cashback",
        value: 2,
        isActive: true,
        asset:{
          dark:<CashEnabledDarkSVG />,
          light:<CashEnabledLightSVG />
        }
      },
    ],
  },
];
