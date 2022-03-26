import cookie from "react-cookies";

var Common = {
  formatDate(date, type) {
    if (date == undefined || date == null || date == "Invalid Date") return "";
    var day = this.formatNumber(date.getDate(), 2);
    var month = this.formatNumber(date.getMonth() + 1, 2);
    var year = this.formatNumber(date.getFullYear(), 4);
    var hours = this.formatNumber(date.getHours(), 2);
    var minutes = this.formatNumber(date.getMinutes(), 2);
    var seconds = this.formatNumber(date.getSeconds(), 2);
    var result = day + "/" + month + "/" + year;
    switch (type) {
      case "fulldate":
        return (result += " " + hours + ":" + minutes + ":" + seconds);

      case "datetime":
        return (result += " " + hours + ":" + minutes);

      case "timedate":
        return (result = hours + ":" + minutes + " " + result);

      case "vietnamese":
        return (result = `${day} tháng ${month}, ${year}`);

      case "jsondate":
        return (result = date.toISOString());
      case "time":
        return (result = hours + ":" + minutes + ":" + seconds);

      default:
        return result;
    }
  },
  formatNumber(number, length) {
    var result = "";
    for (var i = 0; i < length; i++) {
      result += "0";
    }
    result += number;
    return result.slice(-length);
  },
  formatCurrency(currency, shortFormat, suffix) {
    if (shortFormat && currency) {
      return currency >= 1000
        ? Math.round(currency / 1000).toString() + "K"
        : Math.round(currency).toString() + "K";
    }
    return currency.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
  },
  GetToken: () => {
    let token = cookie.load("token");
    return token;
  },
  isDesktop() {
    return window.innerWidth > 960;
  },   GroupArray(array, key) {
    const map = new Map();
    array.forEach((item) => {
        let keyValue = item[key];
        const collection = map.get(keyValue);
        if (!collection) {
            map.set(keyValue, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
},

};

export default Common;
