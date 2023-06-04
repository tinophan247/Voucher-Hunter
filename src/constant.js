function createVoucherData(
  id,
  name,
  desc,
  discount,
  condition1,
  condition2,
  voucherImg,
  location,
  start,
  expired
) {
  return {
    id,
    name,
    desc,
    discount,
    condition1,
    condition2,
    voucherImg,
    location,
    start,
    expired,
  };
}

export const VoucherData = [
  createVoucherData(
    123024,
    "Giảm giá Gà Rán KFC",
    "",
    "50%",
    "Hóa đơn trên 500k",
    "Sản phẩm món lẻ",
    "https://4c448342d6996fb20913-fd1f9dc15ff616aa7fa94219cb721c9c.ssl.cf3.rackcdn.com/86/cf/644204_800a68745f224c41adffbea0c8f824e3.jpeg",
    "KFC Quang Trung",
    "01/05/2023",
    "31/06/2023"
  ),
  createVoucherData(
    123025,
    "Giảm giá Phúc Long",
    "",
    "20%",
    "Hóa đơn trên 100k",
    "Tất cả món nước",
    "https://static.ybox.vn/2018/8/5/1535045386213-1533712498263-Thi%E1%BA%BFt%20k%E1%BA%BF%20kh%C3%B4ng%20t%C3%AAn%20(1).png",
    "Tất cả chi nhánh",
    "01/05/2023",
    "31/06/2023"
  ),
  createVoucherData(
    123026,
    "Giảm giá Highland Coffee",
    "",
    "50k",
    "Hóa đơn trên 100k",
    "Tất cả món nước",
    "https://images.foody.vn/res/g6/57549/prof/s640x400/image-ac237052-210205133609.jpeg",
    "Tất cả chi nhánh",
    "01/05/2023",
    "31/06/2023"
  ),
];

function createPartnerData(id, name, desc, storeType, partnerType) {
  return { id, name, desc, storeType, partnerType };
}

export const PartnerData = [
  createPartnerData(
    1,
    "Cửa hàng KFC",
    "Gà Rán",
    "Nhà hàng KFC",
    "Nhà hàng",
  ),
  createPartnerData(
    2,
    "Phúc Long",
    "Trà sữa Phúc Long",
    "Phúc Long",
    "Nhà hàng",
  ),
  createPartnerData(
    3,
    "Highland",
    "Highland Coffee",
    "Highland",
    "Nhà hàng",
  ),
];

function createEventData(id, name, desc, partner,storeType, game, selectedVoucher, start, expired) {
  return { id, name, desc, partner, storeType, game, selectedVoucher, start, expired };
}

export const EventData = [
  createEventData(
    1,
    "Giảm Giá Mùa Hè",
    "Giảm Giá Gà Rán",
    "Nhà hàng KFC",
    "Nhà hàng",
    'Game 1',
    '',
    "01/05/2023",
    "31/06/2023"
  ),
  createEventData(
    2,
    "Giảm Giá Mùa Hè",
    "Giảm Giá Gà Rán",
    "Nhà hàng KFC",
    "Nhà hàng",
    'Game 1',
    '',
    "01/05/2023",
    "31/06/2023"
  ),
  createEventData(
    3,
    "Giảm Giá Mùa Hè",
    "Giảm Giá Gà Rán",
    "Nhà hàng KFC",
    "Nhà hàng",
    'Game 1',
    '',
    "01/05/2023",
    "31/06/2023"
  ),
];

function createUserData(id, username, password, voucherList, role ) {
  return { id, username, password, voucherList,role };
}

export const UserData = [
  createUserData(
    1,
    "Nguyễn Văn A",
    "12345678",
    [123024,123025,123026],
    "Super Admin",
  ),
];

export const defaultMyVoucher = {
  id : 0,
  name : '',
  desc : '',
  discount : '',
  condition1 : '',
  condition2: '',
  voucherImg : '',
  location : '',
  start: '',
  expired :''
}

export const defaultTypeOfStore = {
  id: 0 , 
  description: "" 
}

export const defaultVoucher = {
  id: 0,
  name: "",
  description: "",
  discount: "",
  img: "",
  code: "",
  condition1: "",
  condition2: "",
  tos: "",
  startDate: null,
  endDate: null,
}

export const defaultStore = {
  id: 0,
  partnerName: "",
  storeName: "",
  address: "",
  ward: "",
  district: "",
  province: "",
  tos: ""
}

export const defaultPartner = {
  id: 0,
  partnerName: "",
  description: "",
  taxCode: "",
  top: "",
}

export const typeOfPartner = [
  {
    value : 'VIP',
    label : 'VIP'
  },
  {
    value : 'Thân thiết',
    label : 'Thân thiết'
  },
  {
    value : 'Thường',
    label : 'Thường'
  },
]