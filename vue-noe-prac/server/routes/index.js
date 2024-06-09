var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/home',function(req, res, next){
  res.send({
    code: 0,
    data: {
      tabData: [
        {
          id: 0,
          name: "Long-Haired Cat",
          value: "longHairedCat",
          selected: true,
        },
        {
          id: 1,
          name: "Short-Hair Cat",
          value: "shortHairCat",
          selected: false,
        },
        {
          id: 2,
          name: "Curly Haired Cat",
          value: "curlyHairedCat",
          selected: false,
        },
        { id: 3, name: "Rural cat", value: "ruralCat", selected: false },
        { id: 4, name: "special kind", value: "specialkind", selected: false },
      ],
      //this is brief data
      briefData: {
        subTitle: "PETS",
        title: "Cats",
        description: "FIND THE CATS THAT YOU LIKE.",
      },
      data: [
        //this is swiper data
        {
          id: 0,
          backgroundImg:"/featureBack.jpg",
          name: "Long-Haired Cat",
          value: "longHairedCat",
          imageList: [
            {
              id: 0,
              imageUrl: "/swiper1.jpg",
              title: "Maine Coon",
              nation: "United States",
              description:
                "The Maine Coon is the largest and oldest cat breed in the United States. The name 'coon' means raccoon in English, and the cat may have gotten the name because of its bushy tail's resemblance to that of a baby raccoon. Because Maine Coon cats can be friendly with people, it is a good pet breed. Can also be used as a guard cat. Maine Coon cats are also affectionately called 'gentle giants' because of their large size. The Maine Coon cat was exhibited as a master rat catcher at agricultural shows in the mid-19th century and was quickly recognized as a breed in its own right",
            },
            {
              id: 1,
              imageUrl: "/swiper2.jpg",
              title: "Persian Cat",
              nation: "United States",
              description:
                "The Persian cat is a carnivorous mammal of the genus Feline, also known as the long-haired cat. The trunk is robust and round; The head is round and wide, and the cheeks are full; The ears are pointed and small, the nose is short, and the eyes are big and round; The limbs are stubby, and the claws are large and round; Short tail with fluffy tail hair; Most of the eyes are yellow; The coat is plump and shiny; The coat is a double coat, consisting of a long, soft, fluffy undercoat and a slightly longer, coarser long coat, with a variety of colors and coat patterns.",
            },
            {
              id: 2,
              imageUrl: "/swiper3.jpg",
              title: "Norwegian Forest Cat",
              nation: "United States",
              description:
                "The Norwegian forest cat is a mammal of the feline genus. The head of the Norwegian forest cat is an isosceles triangle from the ears to the chin, with a long, straight nose; The ears are large, their tips rounded and hairy, pointing warily forward like those of a bobcat; The juvenile cat's eyes are almost round, and in adulthood they are larger, almond-shaped, and their color is generally in harmony with the underlying color of its coat. Norwegian forest cats are available in solid and tortoiseshell, smoke, gradient and tip, spotted and silver tabby colors.",
            },
            {
              id: 3,
              imageUrl: "/swiper4.jpg",
              title: "Birman",
              nation: "United States",
              description:
                "The Birman cat is a mammal of the genus Feline of the carnivorous order, also known as the Burmese Holy Cat. The head is wide and round; High nose bridge; Chin full and firm; The eyes are large and round, with wide eye spacing; The ears are medium in length, the ends of the ears are slightly rounded, and the ears are widely spaced. Slightly longer body; Limbs medium length, thicker; The claws were large and round; Tail length medium; The whole body coat is long and thick, the hair around the face is slightly shorter, the belly coat is slightly wavy, and the tail hair is fluffy and dense. The claws are white, the eye color is only blue, and the fur color is black, chocolate, red, blue, cream and other colors.",
            },
            {
              id: 4,
              imageUrl: "/swiper5.jpg",
              title: "Ragdoll",
              nation: "United States",
              description:
                "The Ragdoll cat is a large pet cat, with a body length of up to 1 meter (including the tail), the male weighs about 6.8-9.0 kg, and the female weighs about 4.5-6.8 kg. The face is broad, with smooth cheeks, medium sized ears and blue eyes. There are six coat colors: seal, blue, chocolate, clove, light red and white. According to The color and pattern distribution, The International Cat Association (TICA) divides uppets into three types: accent, glove, and two-tone.",
            },
          ],
        },
        {
          id: 1,
          backgroundImg: "",
          name: "Short-Hair Cat",
          value: "shortHairCat",
          imageList: [
            {
              id: 0,
              imageUrl: "/swiper1.jpg",
              title: "Maine Coon",
              nation: "United States",
              description:
                "The Maine Coon is the largest and oldest cat breed in the United States. The name 'coon' means raccoon in English, and the cat may have gotten the name because of its bushy tail's resemblance to that of a baby raccoon. Because Maine Coon cats can be friendly with people, it is a good pet breed. Can also be used as a guard cat. Maine Coon cats are also affectionately called 'gentle giants' because of their large size. The Maine Coon cat was exhibited as a master rat catcher at agricultural shows in the mid-19th century and was quickly recognized as a breed in its own right",
            },
            {
              id: 1,
              imageUrl: "/swiper2.jpg",
              title: "Persian Cat",
              nation: "United States",
              description:
                "The Persian cat is a carnivorous mammal of the genus Feline, also known as the long-haired cat. The trunk is robust and round; The head is round and wide, and the cheeks are full; The ears are pointed and small, the nose is short, and the eyes are big and round; The limbs are stubby, and the claws are large and round; Short tail with fluffy tail hair; Most of the eyes are yellow; The coat is plump and shiny; The coat is a double coat, consisting of a long, soft, fluffy undercoat and a slightly longer, coarser long coat, with a variety of colors and coat patterns.",
            },
            {
              id: 2,
              imageUrl: "/swiper3.jpg",
              title: "Norwegian Forest Cat",
              nation: "United States",
              description:
                "The Norwegian forest cat is a mammal of the feline genus. The head of the Norwegian forest cat is an isosceles triangle from the ears to the chin, with a long, straight nose; The ears are large, their tips rounded and hairy, pointing warily forward like those of a bobcat; The juvenile cat's eyes are almost round, and in adulthood they are larger, almond-shaped, and their color is generally in harmony with the underlying color of its coat. Norwegian forest cats are available in solid and tortoiseshell, smoke, gradient and tip, spotted and silver tabby colors.",
            },
            {
              id: 3,
              imageUrl: "/swiper4.jpg",
              title: "Birman",
              nation: "United States",
              description:
                "The Birman cat is a mammal of the genus Feline of the carnivorous order, also known as the Burmese Holy Cat. The head is wide and round; High nose bridge; Chin full and firm; The eyes are large and round, with wide eye spacing; The ears are medium in length, the ends of the ears are slightly rounded, and the ears are widely spaced. Slightly longer body; Limbs medium length, thicker; The claws were large and round; Tail length medium; The whole body coat is long and thick, the hair around the face is slightly shorter, the belly coat is slightly wavy, and the tail hair is fluffy and dense. The claws are white, the eye color is only blue, and the fur color is black, chocolate, red, blue, cream and other colors.",
            },
            {
              id: 4,
              imageUrl: "/swiper5.jpg",
              title: "Ragdoll",
              nation: "United States",
              description:
                "The Ragdoll cat is a large pet cat, with a body length of up to 1 meter (including the tail), the male weighs about 6.8-9.0 kg, and the female weighs about 4.5-6.8 kg. The face is broad, with smooth cheeks, medium sized ears and blue eyes. There are six coat colors: seal, blue, chocolate, clove, light red and white. According to The color and pattern distribution, The International Cat Association (TICA) divides uppets into three types: accent, glove, and two-tone.",
            },
          ],
        },
        {
          id: 2,
          backgroundImg: "",
          name: "Curly Haired Cat",
          value: "curlyHairedCat",
          imageList: [
            {
              id: 0,
              imageUrl: "/swiper1.jpg",
              title: "Maine Coon",
              nation: "United States",
              description:
                "The Maine Coon is the largest and oldest cat breed in the United States. The name 'coon' means raccoon in English, and the cat may have gotten the name because of its bushy tail's resemblance to that of a baby raccoon. Because Maine Coon cats can be friendly with people, it is a good pet breed. Can also be used as a guard cat. Maine Coon cats are also affectionately called 'gentle giants' because of their large size. The Maine Coon cat was exhibited as a master rat catcher at agricultural shows in the mid-19th century and was quickly recognized as a breed in its own right",
            },
            {
              id: 1,
              imageUrl: "/swiper2.jpg",
              title: "Persian Cat",
              nation: "United States",
              description:
                "The Persian cat is a carnivorous mammal of the genus Feline, also known as the long-haired cat. The trunk is robust and round; The head is round and wide, and the cheeks are full; The ears are pointed and small, the nose is short, and the eyes are big and round; The limbs are stubby, and the claws are large and round; Short tail with fluffy tail hair; Most of the eyes are yellow; The coat is plump and shiny; The coat is a double coat, consisting of a long, soft, fluffy undercoat and a slightly longer, coarser long coat, with a variety of colors and coat patterns.",
            },
            {
              id: 2,
              imageUrl: "/swiper3.jpg",
              title: "Norwegian Forest Cat",
              nation: "United States",
              description:
                "The Norwegian forest cat is a mammal of the feline genus. The head of the Norwegian forest cat is an isosceles triangle from the ears to the chin, with a long, straight nose; The ears are large, their tips rounded and hairy, pointing warily forward like those of a bobcat; The juvenile cat's eyes are almost round, and in adulthood they are larger, almond-shaped, and their color is generally in harmony with the underlying color of its coat. Norwegian forest cats are available in solid and tortoiseshell, smoke, gradient and tip, spotted and silver tabby colors.",
            },
            {
              id: 3,
              imageUrl: "/swiper4.jpg",
              title: "Birman",
              nation: "United States",
              description:
                "The Birman cat is a mammal of the genus Feline of the carnivorous order, also known as the Burmese Holy Cat. The head is wide and round; High nose bridge; Chin full and firm; The eyes are large and round, with wide eye spacing; The ears are medium in length, the ends of the ears are slightly rounded, and the ears are widely spaced. Slightly longer body; Limbs medium length, thicker; The claws were large and round; Tail length medium; The whole body coat is long and thick, the hair around the face is slightly shorter, the belly coat is slightly wavy, and the tail hair is fluffy and dense. The claws are white, the eye color is only blue, and the fur color is black, chocolate, red, blue, cream and other colors.",
            },
            {
              id: 4,
              imageUrl: "/swiper5.jpg",
              title: "Ragdoll",
              nation: "United States",
              description:
                "The Ragdoll cat is a large pet cat, with a body length of up to 1 meter (including the tail), the male weighs about 6.8-9.0 kg, and the female weighs about 4.5-6.8 kg. The face is broad, with smooth cheeks, medium sized ears and blue eyes. There are six coat colors: seal, blue, chocolate, clove, light red and white. According to The color and pattern distribution, The International Cat Association (TICA) divides uppets into three types: accent, glove, and two-tone.",
            },
          ],
        },
        {
          id: 3,
          backgroundImg: "",
          name: "Rural cat",
          value: "ruralCat",
          imageList: [
            {
              id: 0,
              imageUrl: "/swiper1.jpg",
              title: "Maine Coon",
              nation: "United States",
              description:
                "The Maine Coon is the largest and oldest cat breed in the United States. The name 'coon' means raccoon in English, and the cat may have gotten the name because of its bushy tail's resemblance to that of a baby raccoon. Because Maine Coon cats can be friendly with people, it is a good pet breed. Can also be used as a guard cat. Maine Coon cats are also affectionately called 'gentle giants' because of their large size. The Maine Coon cat was exhibited as a master rat catcher at agricultural shows in the mid-19th century and was quickly recognized as a breed in its own right",
            },
            {
              id: 1,
              imageUrl: "/swiper2.jpg",
              title: "Persian Cat",
              nation: "United States",
              description:
                "The Persian cat is a carnivorous mammal of the genus Feline, also known as the long-haired cat. The trunk is robust and round; The head is round and wide, and the cheeks are full; The ears are pointed and small, the nose is short, and the eyes are big and round; The limbs are stubby, and the claws are large and round; Short tail with fluffy tail hair; Most of the eyes are yellow; The coat is plump and shiny; The coat is a double coat, consisting of a long, soft, fluffy undercoat and a slightly longer, coarser long coat, with a variety of colors and coat patterns.",
            },
            {
              id: 2,
              imageUrl: "/swiper3.jpg",
              title: "Norwegian Forest Cat",
              nation: "United States",
              description:
                "The Norwegian forest cat is a mammal of the feline genus. The head of the Norwegian forest cat is an isosceles triangle from the ears to the chin, with a long, straight nose; The ears are large, their tips rounded and hairy, pointing warily forward like those of a bobcat; The juvenile cat's eyes are almost round, and in adulthood they are larger, almond-shaped, and their color is generally in harmony with the underlying color of its coat. Norwegian forest cats are available in solid and tortoiseshell, smoke, gradient and tip, spotted and silver tabby colors.",
            },
            {
              id: 3,
              imageUrl: "/swiper4.jpg",
              title: "Birman",
              nation: "United States",
              description:
                "The Birman cat is a mammal of the genus Feline of the carnivorous order, also known as the Burmese Holy Cat. The head is wide and round; High nose bridge; Chin full and firm; The eyes are large and round, with wide eye spacing; The ears are medium in length, the ends of the ears are slightly rounded, and the ears are widely spaced. Slightly longer body; Limbs medium length, thicker; The claws were large and round; Tail length medium; The whole body coat is long and thick, the hair around the face is slightly shorter, the belly coat is slightly wavy, and the tail hair is fluffy and dense. The claws are white, the eye color is only blue, and the fur color is black, chocolate, red, blue, cream and other colors.",
            },
            {
              id: 4,
              imageUrl: "/swiper5.jpg",
              title: "Ragdoll",
              nation: "United States",
              description:
                "The Ragdoll cat is a large pet cat, with a body length of up to 1 meter (including the tail), the male weighs about 6.8-9.0 kg, and the female weighs about 4.5-6.8 kg. The face is broad, with smooth cheeks, medium sized ears and blue eyes. There are six coat colors: seal, blue, chocolate, clove, light red and white. According to The color and pattern distribution, The International Cat Association (TICA) divides uppets into three types: accent, glove, and two-tone.",
            },
          ],
        },
        {
          id: 4,
          backgroundImg: "",
          name: "special kind",
          value: "specialkind",
          imageList: [
            {
              id: 0,
              imageUrl: "/swiper1.jpg",
              title: "Maine Coon",
              nation: "United States",
              description:
                "The Maine Coon is the largest and oldest cat breed in the United States. The name 'coon' means raccoon in English, and the cat may have gotten the name because of its bushy tail's resemblance to that of a baby raccoon. Because Maine Coon cats can be friendly with people, it is a good pet breed. Can also be used as a guard cat. Maine Coon cats are also affectionately called 'gentle giants' because of their large size. The Maine Coon cat was exhibited as a master rat catcher at agricultural shows in the mid-19th century and was quickly recognized as a breed in its own right",
            },
            {
              id: 1,
              imageUrl: "/swiper2.jpg",
              title: "Persian Cat",
              nation: "United States",
              description:
                "The Persian cat is a carnivorous mammal of the genus Feline, also known as the long-haired cat. The trunk is robust and round; The head is round and wide, and the cheeks are full; The ears are pointed and small, the nose is short, and the eyes are big and round; The limbs are stubby, and the claws are large and round; Short tail with fluffy tail hair; Most of the eyes are yellow; The coat is plump and shiny; The coat is a double coat, consisting of a long, soft, fluffy undercoat and a slightly longer, coarser long coat, with a variety of colors and coat patterns.",
            },
            {
              id: 2,
              imageUrl: "/swiper3.jpg",
              title: "Norwegian Forest Cat",
              nation: "United States",
              description:
                "The Norwegian forest cat is a mammal of the feline genus. The head of the Norwegian forest cat is an isosceles triangle from the ears to the chin, with a long, straight nose; The ears are large, their tips rounded and hairy, pointing warily forward like those of a bobcat; The juvenile cat's eyes are almost round, and in adulthood they are larger, almond-shaped, and their color is generally in harmony with the underlying color of its coat. Norwegian forest cats are available in solid and tortoiseshell, smoke, gradient and tip, spotted and silver tabby colors.",
            },
            {
              id: 3,
              imageUrl: "/swiper4.jpg",
              title: "Birman",
              nation: "United States",
              description:
                "The Birman cat is a mammal of the genus Feline of the carnivorous order, also known as the Burmese Holy Cat. The head is wide and round; High nose bridge; Chin full and firm; The eyes are large and round, with wide eye spacing; The ears are medium in length, the ends of the ears are slightly rounded, and the ears are widely spaced. Slightly longer body; Limbs medium length, thicker; The claws were large and round; Tail length medium; The whole body coat is long and thick, the hair around the face is slightly shorter, the belly coat is slightly wavy, and the tail hair is fluffy and dense. The claws are white, the eye color is only blue, and the fur color is black, chocolate, red, blue, cream and other colors.",
            },
            {
              id: 4,
              imageUrl: "/swiper5.jpg",
              title: "Ragdoll",
              nation: "United States",
              description:
                "The Ragdoll cat is a large pet cat, with a body length of up to 1 meter (including the tail), the male weighs about 6.8-9.0 kg, and the female weighs about 4.5-6.8 kg. The face is broad, with smooth cheeks, medium sized ears and blue eyes. There are six coat colors: seal, blue, chocolate, clove, light red and white. According to The color and pattern distribution, The International Cat Association (TICA) divides uppets into three types: accent, glove, and two-tone.",
            },
          ],
        },
      ],
    },
  });
});

module.exports = router;
