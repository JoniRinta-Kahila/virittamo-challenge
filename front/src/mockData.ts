import { DeviceDetails } from "../../shared/types/device";
import { DeviceIssuanceInfo } from "../../shared/types/issuanceInfo";

// 50 devices
export const mockDevices: DeviceDetails[] = [
  {
    name: 'iPhone 12',
    manufacturer: 'Apple',
    deviceNumber: '123456'
  },
  {
    name: 'iPhone 12 Pro',
    manufacturer: 'Apple',
    deviceNumber: '789012'
  },
  {
    name: 'iPhone 12 Pro Max',
    manufacturer: 'Apple',
    deviceNumber: '345678'
  },
  {
    name: 'iPhone 12 Mini',
    manufacturer: 'Apple',
    deviceNumber: '901234'
  },
  {
    name: 'iPhone 11',
    manufacturer: 'Apple',
    deviceNumber: '567890'
  },
  {
    name: 'iPhone 11 Pro',
    manufacturer: 'Apple',
    deviceNumber: '234567'
  },
  {
    name: 'iPhone 11 Pro Max',
    manufacturer: 'Apple',
    deviceNumber: '890123'
  },
  {
    name: 'iPhone SE',
    manufacturer: 'Apple',
    deviceNumber: '456789'
  },
  {
    name: 'iPhone X',
    manufacturer: 'Apple',
    deviceNumber: '012345'
  },
  {
    name: 'iPhone XS',
    manufacturer: 'Apple',
    deviceNumber: '678901'
  },
  {
    name: 'iPhone XS Max',
    manufacturer: 'Apple',
    deviceNumber: '123456'
  },
  {
    name: 'iPhone XR',
    manufacturer: 'Apple',
    deviceNumber: '789012'
  },
  {
    name: 'Galaxy S21 Ultra',
    manufacturer: 'Samsung',
    deviceNumber: '345678'
  },
  {
    name: 'Galaxy S21',
    manufacturer: 'Samsung',
    deviceNumber: '789012'
  },
  {
    name: 'Pixel 5',
    manufacturer: 'Google',
    deviceNumber: '345678'
  },
  {
    name: 'OnePlus 9',
    manufacturer: 'OnePlus',
    deviceNumber: '901234'
  },
  {
    name: 'Xperia 5',
    manufacturer: 'Sony',
    deviceNumber: '567890'
  },
  {
    name: 'Mi 11',
    manufacturer: 'Xiaomi',
    deviceNumber: '234567'
  },
  {
    name: 'Mate 40',
    manufacturer: 'Huawei',
    deviceNumber: '890123'
  },
  {
    name: 'Zenfone 7',
    manufacturer: 'Asus',
    deviceNumber: '456789'
  },
  {
    name: 'Velvet',
    manufacturer: 'LG',
    deviceNumber: '012345'
  },
  {
    name: 'Moto G Power',
    manufacturer: 'Motorola',
    deviceNumber: '678901'
  },
  {
    name: 'A72',
    manufacturer: 'Oppo',
    deviceNumber: '123456'
  },
  {
    name: 'Nord N100',
    manufacturer: 'OnePlus',
    deviceNumber: '789012'
  },
  {
    name: 'Galaxy A12',
    manufacturer: 'Samsung',
    deviceNumber: '345678'
  },
  {
    name: 'Redmi 9T',
    manufacturer: 'Xiaomi',
    deviceNumber: '901234'
  },
  {
    name: 'Xperia 10 III',
    manufacturer: 'Sony',
    deviceNumber: '567890'
  },
  {
    name: 'Mi 10T Lite',
    manufacturer: 'Xiaomi',
    deviceNumber: '234567'
  },
  {
    name: 'Mate 40 Pro',
    manufacturer: 'Huawei',
    deviceNumber: '890123'
  },
  {
    name: 'Zenfone 7 Pro',
    manufacturer: 'Asus',
    deviceNumber: '456789'
  },
  {
    name: 'Velvet 5G',
    manufacturer: 'LG',
    deviceNumber: '012345'
  },
  {
    name: 'Moto G Stylus',
    manufacturer: 'Motorola',
    deviceNumber: '678901'
  },
  {
    name: 'A52',
    manufacturer: 'Oppo',
    deviceNumber: '123456'
  },
  {
    name: 'Nord N10',
    manufacturer: 'OnePlus',
    deviceNumber: '789012'
  },
  {
    name: 'Galaxy A32',
    manufacturer: 'Samsung',
    deviceNumber: '345678'
  },
  {
    name: 'Redmi Note 10',
    manufacturer: 'Xiaomi',
    deviceNumber: '901234'
  },
  {
    name: 'Xperia 5 II',
    manufacturer: 'Sony',
    deviceNumber: '567890'
  },
  {
    name: 'Mi 11 Lite',
    manufacturer: 'Xiaomi',
    deviceNumber: '234567'
  },
  {
    name: 'Mate 40 RS',
    manufacturer: 'Huawei',
    deviceNumber: '890123'
  },
  {
    name: 'Zenfone 8',
    manufacturer: 'Asus',
    deviceNumber: '456789'
  },
  {
    name: 'Velvet 2 Pro',
    manufacturer: 'LG',
    deviceNumber: '012345'
  },
  {
    name: 'Moto G100',
    manufacturer: 'Motorola',
    deviceNumber: '678901'
  },
  {
    name: 'A74',
    manufacturer: 'Oppo',
    deviceNumber: '123456'
  },
  {
    name: 'Nord N100',
    manufacturer: 'OnePlus',
    deviceNumber: '789012'
  },
  {
    name: 'Galaxy A12',
    manufacturer: 'Samsung',
    deviceNumber: '345678'
  },
  {
    name: 'Redmi 9T',
    manufacturer: 'Xiaomi',
    deviceNumber: '901234'
  },
  {
    name: 'Xperia 10 III',
    manufacturer: 'Sony',
    deviceNumber: '567890'
  },
  {
    name: 'Mi 10T Lite',
    manufacturer: 'Xiaomi',
    deviceNumber: '234567'
  },
  {
    name: 'Mate 40 Pro',
    manufacturer: 'Huawei',
    deviceNumber: '890123'
  },
  {
    name: 'Zenfone 7 Pro',
    manufacturer: 'Asus',
    deviceNumber: '456789'
  },
]

// Issuance mock data
export const mockIssuances: DeviceIssuanceInfo[] = [
  {
    deviceDetails: mockDevices[0],
    recipientDetails: {
      name: 'John Doe',
      department: 'IT',
    },
    dateOfIssue: '2021-06-01T00:00:00.000Z',
    returningDate: '2021-06-30T00:00:00.000Z',
  },
  {
    deviceDetails: mockDevices[0],
    recipientDetails: {
      name: 'Jane Doe',
      department: 'HR',
    },
    dateOfIssue: '2021-07-01T00:00:00.000Z',
    returningDate: '2021-07-31T00:00:00.000Z',
  },
  {
    deviceDetails: mockDevices[0],
    recipientDetails: {
      name: 'John Smith',
      department: 'Marketing',
    },
    dateOfIssue: '2021-08-01T00:00:00.000Z',
    returningDate: '2021-08-31T00:00:00.000Z',
  },
  {
    deviceDetails: mockDevices[0],
    recipientDetails: {
      name: 'Jane Smith',
      department: 'Sales',
    },
    dateOfIssue: '2021-09-01T00:00:00.000Z',
    returningDate: '2021-09-30T00:00:00.000Z',
  },
  {
    deviceDetails: mockDevices[0],
    recipientDetails: {
      name: 'John Doe',
      department: 'IT',
    },
    dateOfIssue: '2021-10-01T00:00:00.000Z',
    returningDate: '2021-10-31T00:00:00.000Z',
  },
  {
    deviceDetails: mockDevices[0],
    recipientDetails: {
      name: 'Jane Doe',
      department: 'HR',
    },
    dateOfIssue: '2021-11-01T00:00:00.000Z',
    returningDate: '2021-11-30T00:00:00.000Z',
  },
  {
    deviceDetails: mockDevices[0],
    recipientDetails: {
      name: 'John Smith',
      department: 'Marketing',
    },
    dateOfIssue: '2021-12-01T00:00:00.000Z',
    returningDate: '2021-12-31T00:00:00.000Z',
  },
  {
    deviceDetails: mockDevices[0],
    recipientDetails: {
      name: 'Jane Smith',
      department: 'Sales',
    },
    dateOfIssue: '2022-01-01T00:00:00.000Z',
    returningDate: '2022-01-31T00:00:00.000Z',
  },
]