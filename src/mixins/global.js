export const filters = {
  filters: {
    setImagePath: (value) => {
      if (!value) return "";
      let path = process.env.VUE_APP_IMAGE_PATH;
      value = value.toString();

      return path + value;
    },
    setDateYear: (value) => {
      if (!value) return "";
      value = value.toString();
      return value.slice(0, 4);
    },
  },
};
