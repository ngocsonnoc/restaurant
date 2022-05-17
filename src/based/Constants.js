var CONSTANTS = {
  MSG_ERROR: "Có lỗi xảy ra. Vui lòng thử lại sau ít phút.",
  MSG_MIN_LENGTH_INVALID: "Tối thiểu phải có ## ký tự.",
  MSG_MAX_LENGTH_INVALID: "Tối đa cho phép ## ký tự.",
  MSG_MAX_INVALID: "Giá trị phải nhỏ hơn hoặc bằng ##.",
  MSG_MIN_INVALID: "Giá trị phải lớn hơn hoặc bằng ##.",
  MSG_REQUIRED: "Dữ liệu không được để trống.",
  MSG_EMAIL_INVALID: "Email không đúng định dạng.",
  MSG_PASSWORD_INVALID:
    "Mật khẩu chỉ được chứa ký tự chữ cái, chữ số, ký tự đặc biệt.",
  MSG_ONLY_BLANK_INVALID: "Dữ liệu không được chỉ chứa dấu cách",
  MSG_BLANK_POSITION_INVALID:
    "Dữ liệu không được chứa dấu cách ở đầu cuối và nhiều dấu cách giữa các từ",
  MSG_IMAGE_INVALID: "Ảnh không hợp lệ",

  FUNC_CAIDAT: "SYSTEM_CONFIG",
  COMMON_SETTINGS: 90009,
  PLAYER_URL:
    process.env.NODE_ENV === "production"
      ? "http://player.sightcareer.com"
      : "http://localhost:8000",

  CLAIM_TYPE: "http://techforus.net/permission",

  REGEX_PASSWORD: /^[A-Za-z0-9!@#?$%^&*()_[\]|:"{},.<>+=-]*$/,
  INVALID_PASSWORD:
    'Chỉ được nhập chữ in hoa, chữ thường, số và các ký tự !@#?$%^&*()_[]|:"{},.<>+=-',
  NAME_REGEX:
    /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐa-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\s']+$/,
  INVALID_NAME: "Chỉ được nhập chữ in hoa, chữ thường, dấu cách và ký tự '",
  PHONE_REGEX: /^\d+$/,
  BIRTHDAY_REGEX: /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/,
  EMAIL_REGEX:
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  INVALID_EMAIL: "Email không hợp lệ",
  // PHONE_REGEX:'(84[3|5|7|8|9])+([0-9]{8})\b',
  INVALID_PHONE: "Số điện thoại không hợp lệ!",
  COOKIE_USER_REFERENCE: "ref",

  CURRENT_WAREHOUSE: "CURRENT_WAREHOUSE",

  USER_READ: "USER.READ",
  USER_CREATE: "USER.CREATE",
  USER_UPDATE: "USER.UPDATE",
  USER_DELETE: "USER.DELETE",
  USER_RESET_PASSWORD: "USER.RESET_PASSWORD",
  USER_ASSIGN_ROLE: "USER.ASSIGN_ROLE",

  ROLE_READ: "ROLE.READ",
  ROLE_CREATE: "ROLE.CREATE",
  ROLE_UPDATE: "ROLE.UPDATE",
  ROLE_DELETE: "ROLE.DELETE",
  ROLE_PERMISISON: "ROLE.PERMISISON",

  PRODUCT_READ: "PRODUCT.READ",
  PRODUCT_CREATE: "PRODUCT.CREATE",
  PRODUCT_UPDATE: "PRODUCT.UPDATE",
  PRODUCT_DELETE: "PRODUCT.DELETE",

  INSURRANCE_READ: "INSURRANCE.READ",
  INSURRANCE_CREATE: "INSURRANCE.CREATE",
  INSURRANCE_UPDATE: "INSURRANCE.UPDATE",
  INSURRANCE_DELETE: "INSURRANCE.DELETE",
  INSURRANCE_EXPORT: "INSURRANCE.EXPORT",

  CUSTOMER_READ: "CUSTOMER.READ",
  CUSTOMER_CREATE: "CUSTOMER.CREATE",
  CUSTOMER_UPDATE: "CUSTOMER.UPDATE",
  CUSTOMER_DELETE: "CUSTOMER.DELETE",

  COMMENT_READ: "COMMENT.READ",
  COMMENT_CREATE: "COMMENT.CREATE",
  COMMENT_UPDATE: "COMMENT.UPDATE",
  COMMENT_DELETE: "COMMENT.DELETE",

  WEBSETTING_READ: "WEBSETTING.READ",
  WEBSETTING_UPDATE: "WEBSETTING.UPDATE",

  LANDING_READ: "LANDING.READ",
  LANDING_UPDATE: "LANDING.UPDATE",

  CONTACT_READ: "CONTACT.READ",
  CONTACT_DELETE: "CONTACT.DELETE",

  NEWS_READ: "NEWS.READ",
  NEWS_CREATE: "NEWS.CREATE",
  NEWS_UPDATE: "NEWS.UPDATE",
  NEWS_DELETE: "NEWS.DELETE",

  SIDEBAR_MENU_TOPIC: "SIDEBAR",
};
var NOTIFY = {
  SUCCESS: 1,
  ERROR: 2,
  WARNING: 3,
  INFO: 4,
};
var INIT_PAGING = {
  pageSize: 10,
  pageNumber: 1,
  orderBy: "",
  orderDirection: "",
  totalRecords: 0,
};
var PartTime = {
  BREAKFAST: 1,
  LUNCH: 2,
  DINNER: 3,
  DESERT: 4,
};
var SocialBackground = {
  FACEBOOK: "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)",
  GOOGLE: "#d54936",
  INSTAGRAM: "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)",
};

const ActiveTimes = [
  {
    label: "8h-8h45",
    value: 1,
    minLabel: "8h",
    maxLabel: "8h45",
  },
  {
    label: "9h-9h45",
    value: 2,
    minLabel: "9h",
    maxLabel: "9h45",
  },
  {
    label: "10h-10h45",
    value: 3,
    minLabel: "10h",
    maxLabel: "10h45",
  },
  {
    label: "11h-11h45",
    value: 4,
    minLabel: "11h",
    maxLabel: "11h45",
  },
  {
    label: "12h-12h45",
    value: 5,
    minLabel: "12h",
    maxLabel: "12h45",
  },
  {
    label: "13h-13h45",
    value: 6,
    minLabel: "13h",
    maxLabel: "13h45",
  },
  {
    label: "14h-14h45",
    value: 7,
    minLabel: "14h",
    maxLabel: "14h45",
  },
  {
    label: "15h-15h45",
    value: 8,
    minLabel: "15h",
    maxLabel: "15h45",
  },
  {
    label: "16h-16h45",
    value: 9,
    minLabel: "16h",
    maxLabel: "16h45",
  },
  {
    label: "17h-17h45",
    value: 10,
    minLabel: "17h",
    maxLabel: "17h45",
  },
  {
    label: "18h-18h45",
    value: 11,
    minLabel: "18h",
    maxLabel: "18h45",
  },
  {
    label: "19h-19h45",
    value: 12,
    minLabel: "19h",
    maxLabel: "19h45",
  },
  {
    label: "20h-20h45",
    value: 13,
    minLabel: "20h",
    maxLabel: "20h45",
  },
];
export {
  CONSTANTS,
  NOTIFY,
  PartTime,
  SocialBackground,
  INIT_PAGING,
  ActiveTimes,
};
