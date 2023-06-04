/* eslint-disable eqeqeq */
export const formatProvince = (arr, element) => {
  const filterProvince = arr.filter((item) => {
    return item.province_id == element;
  });
  return filterProvince.map((item) => item.province_name);
};

export const formatProvinceToId = (arr, element) => {
    const filterProvince = arr.filter((item) => {
      return item.province_name == element;
    });
    return filterProvince.map((item) => item.province_id);
  };

export const formatDistrict = (arr, element) => {
  const filterDistrict = arr.filter((item) => {
    return item.district_id == element;
  });
  return filterDistrict.map((item) => item.district_name);
};

export const formatWard = (arr, element) => {
  const filterWard = arr.filter((item) => {
    return item.ward_id == element;
  });
  return filterWard.map((item) => item.ward_name);
};

export const convertDataProvince = (array) => {
  const ProvinceList = array.map((item) => ({
    value: item.province_id,
    label: item.province_name,
  }));
  return ProvinceList;
};

export const convertDataDistrict = (array) => {
  const DistrictList = array.map((item) => ({
    value: item.district_id,
    label: item.district_name,
  }));
  return DistrictList;
};

export const convertDataWard = (array) => {
  const WardList = array.map((item) => ({
    value: item.ward_id,
    label: item.ward_name,
  }));
  return WardList;
};
