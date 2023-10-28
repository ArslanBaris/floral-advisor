import birthday from "@/public/static/images/categories/birthday-1.png"
import anniversary from "@/public/static/images/categories/anniversary-2.png"
import couple from "@/public/static/images/categories/couple-1.png"
import getWellSoon from "@/public/static/images/categories/get-well-soon-1.png"
import newWork from "@/public/static/images/categories/new-work-1.png"
import teachersDay from "@/public/static/images/categories/teachers-day-1.png"

export const specialDateRanges = [
    {
        categoryId: 1,
        name: "Sevgililer Günü",
        startDate: new Date(new Date().getFullYear(), 1, 1), // Şubat'ın 1'i
        endDate: new Date(new Date().getFullYear(), 1, 14), // Şubat'ın 14'ü
        color: "red", // Örnek renk: Kırmızı
    },
    {
        categoryId: 2,
        name: "Öğretmenler Günü",
        startDate: new Date(new Date().getFullYear(), 10, 1), // Kasım'ın 1'i
        endDate: new Date(new Date().getFullYear(), 10, 24), // Kasım'ın 24'ü
        color: "blue", // Örnek renk: Mavi
    },
    // Diğer özel günler burada tanımlanabilir
];


export const setCategoryProp = (id, type) => {
    if (id === 1) { // sevgililer günü
      if (type === "bg-image") {
        return couple
      }
      else if (type === "bg-color") {
        return '#FBFBFB'
      }
    }
    if (id === 2) { // doğum günü
      if (type === "bg-image") {
        return birthday
      }
      else if (type === "bg-color") {
        return '#FCFCF0'
      }
    }
    if (id === 3) { // evlilik yıl dönümü
      if (type === "bg-image") {
        return anniversary
      }
      else if (type === "bg-color") {
        return '#FEDED2'
      }
    }
    if (id === 4) { // yeni iş
      if (type === "bg-image") {
        return newWork
      }
      else if (type === "bg-color") {
        return '#FCFFFE'
      }
    }
    if (id === 5) { // geçmiş olsun
      if (type === "bg-image") {
        return getWellSoon
      }
      else if (type === "bg-color") {
        return '#E9F8FA'
      }
    }
    if (id === 6) { // öğretmenler günü
      if (type === "bg-image") {
        return teachersDay
      }
      else if (type === "bg-color") {
        return '#FDF5E7'
      }
    }

  }