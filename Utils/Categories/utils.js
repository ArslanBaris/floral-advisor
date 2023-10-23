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
    if (id === 1) {
      if (type === "bg-image") {
        return 'https://media.discordapp.net/attachments/897112801812836392/1163743675910717490/OIG.png?ex=6540afc1&is=652e3ac1&hm=18d167da2d207ee8e96bd083012a2eda38f346447a8c763365d4b5e66e4c8e47&=&width=1170&height=1170'
      }
      else if (type === "bg-color") {
        return '#FBFBFB'
      }
    }
    if (id === 2) {
      if (type === "bg-image") {
        return 'https://cdn.discordapp.com/attachments/897112801812836392/1163747157153685524/OIG.png?ex=6540b2ff&is=652e3dff&hm=9f101d51ac9ca2213cf2a890ee90be2ba383937137757b54a42a07682306f9b9&'
      }
      else if (type === "bg-color") {
        return '#FDFAF1'
      }
    }
    if (id === 3) {
      if (type === "bg-image") {
        return 'https://cdn.discordapp.com/attachments/897112801812836392/1163747574088482917/OIG.png?ex=6540b363&is=652e3e63&hm=eb45194e8b49c7c7e425b732c456561a1bde56cff8d60138041f8a2de2939392&'
      }
      else if (type === "bg-color") {
        return '#F9FCEF'
      }
    }
    if (id === 4) {
      if (type === "bg-image") {
        return 'https://cdn.discordapp.com/attachments/897112801812836392/1163747129873940520/OIG.png?ex=6540b2f9&is=652e3df9&hm=1cdd68413b42fc1952448b1b19155365bb9314ef5feab204c89734d7abac360b&'
      }
      else if (type === "bg-color") {
        return '#FCFFFE'
      }
    }
    if (id === 5) {
      if (type === "bg-image") {
        return 'https://cdn.discordapp.com/attachments/897112801812836392/1163748150071267388/OIG.png?ex=6540b3ec&is=652e3eec&hm=404c02b9faef8724c316bf1d6018b02784e0dd930e800b20ca3a1b329aaeaf52&'
      }
      else if (type === "bg-color") {
        return '#E9F8FA'
      }
    }
    if (id === 6) {
      if (type === "bg-image") {
        return 'https://cdn.discordapp.com/attachments/897112801812836392/1163746505694396436/OIG.png?ex=6540b264&is=652e3d64&hm=c4aa3e0fc2aee24dc23f4df7909fd06c757972746f1459bfc0d30dd77e1fee4c&'
      }
      else if (type === "bg-color") {
        return '#FDF5E7'
      }
    }

  }