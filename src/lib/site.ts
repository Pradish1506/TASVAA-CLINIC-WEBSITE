export const SITE = {
  name: "Tasvaa Skin and Hair Clinic",
  phone: "+91 96114 53707",
  phoneRaw: "919611453707",
  email: "tasvaaskinandhairclinic@gmail.com",
  address: "First Floor, HEGmel House, 26/A, 1st Cross Rd, KPTCL Layout, Bengaluru, Karnataka 560035",
  hours: "Mon–Thu & Sat · 11 am–8 pm  |  Sun · 10:30 am–1:30 pm  |  Fri · Closed",
  mapsEmbed:
    "https://maps.google.com/maps?q=First+Floor,+HEGmel+House,+26%2FA,+1st+Cross+Rd,+KPTCL+Layout,+Bengaluru,+Karnataka+560035&output=embed",
};

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(message)}`;
