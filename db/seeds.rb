# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Product.create(seller_id:1,title:"Handmade cloth rag doll, pink teal fabric blonde doll, personalized doll, heirloom gift for girl, nursery decor, doll Mia",description:"This awesome heirloom doll is perfect for any kind of celebration, she is the life of the party! Her colors combination is sure to brighten a little girl's eyes!
# The cloth doll is made for young and old. She made with the hope that she will start of in a child's arm to then be forever treasured as she grow old. It is more then a toy or a decorational piece, it is an object that one will give much sentimental value to",price:25,quantity:3,img_url:"https://i.imgur.com/4RkMdKx.jpg")

# Untitled⁩/Users⁩/swapnadammalapati⁩/⁨Desktop⁩/⁨Project⁩ /kidsy⁩/⁨app⁩/assets⁩ /⁨images⁩


# p.photo.attach(io: File.open("./app/assets/images/doll2.jpg"),file_name:"doll2.jpg")

Product.delete_all
User.delete_all
 user1=User.create!(username: 'username',password: 'password',email:"chj@hm.com")
user2=User.create!(username: 'sam',password: 'password',email:"sam@gmail.com")
user3=User.create!(username: 'john',password: 'password',email:"john@gmail.com")


p2=Product.create(
    seller_id:user1.id,
    title:"Personalized Silicone Teething Ring | Silicone Teether ",
    description:"Please leave name in 'notes' at checkout if you do not see a personalization box.If picking more than one color option please notate specifics in notes as well.",
    price:33,
    quantity:234)
p2.photo.attach(io: File.open("./app/assets/images/il_570xN.1569647871_o9oj.jpg"),filename:"doll3.jpg")


# p3=Product.create(
#     seller_id:user2.id,
#     title:"",
#     description:"",
#     price:18.91,
#     quantity:24)
# p3.photo.attach(io: File.open("./app/assets/images/bottle_warmer.jpeg"),filename:"bottle_warmer.jpeg")

l7=Product.create(
        seller_id:user3.id,
        title:"Personalized Teddy Bear",
        description:"A traditional keepsake, our personalized teddy bear offers friendship that will last well beyond baby’s first year. The silky, soft fur of this monogrammed teddy will lead to hours of hugs and cuddles with this plush bear. The comfy chenille overalls are embroidered and able to be removed from the bear. Moms will love the washable durability of each piece. This custom teddy bear will make a thoughtful gift for your next baby shower or birthday party, and a classic addition to any nursery.",
        price:34.00,
        quantity:24)
    l7.photo.attach(io: File.open("./app/assets/images/image4.jpg"),filename:"image4.jpg")


    l6=Product.create(
    seller_id:user2.id,
    title:"Banjo Kazooie Jinjo -PreOrder-",
    description:"Ever remember hunting down these creatures in the n64 world of Banjo Kazooie? Well now you can have one or more in real life!! Each of these guys are lost and want to come to a nice loving home.

    This listing is for ONE jinjo! Each are handmade individually and details hand sewn on. They are two sizes! A regular is about 10 inches tall and large version about 14 inches tall.",
    price:50,
    quantity:24)
l6.photo.attach(io: File.open("./app/assets/images/image5.jpg"),filename:"image5.jpg")


l2=Product.create(
    seller_id:user3.id,
    title:"Sale! Crochet pattern of cute deer, Amigurumi Pattern, Christmas Crochet pattern, INSTANT DOWNLOAD, PDF file in english",
    description:"This is a PDF CROCHET PATTERN only! 
    The finished Deer here - 
    
    
    Includes Photos, Instructions and Pattern. Written in English.
    
    Finished Deer is approx tall 12 сm (5 in). This may vary depending on the yarn and the size of crochet hook used.",
    price:2.80,
    quantity:24)
l2.photo.attach(io: File.open("./app/assets/images/image2.jpg"),filename:"image2.jpg")












l1=Product.create(
    seller_id:user2.id,
    title:"Digital Pattern: Princess Felt Finger Puppets",
    description:"This listing is only for purchase of PDF patterns of the finger puppets featured in the picture. 

    No actual finger puppets will be sent to your address.
    
    From the patterns you can make five princesses finger puppets:",
    price:5.91,
    quantity:24)
l1.photo.attach(io: File.open("./app/assets/images/image1.jpg"),filename:"image1.jpg")

p3=Product.create(
    seller_id:user2.id,
    title:"Philips Avent Fast Baby Bottle Warmer, SCF355/00",
    description:"Philips AVENT SCF355/00 Bottle and Baby Food Warmer is a safe and easy way to make mealtime more comfortable for your baby. Once switched on, the warmer gently heats bottles and food within 3 minutes. Its compact size makes it easy to store on a kitchen countertop or bedside table for nighttime feedings. The warmer heats bottles and foods safely and evenly and unlike microwaves, won't cause hotspots, so you can be sure the internal temperature is safe for your baby. All Philips AVENT bottles, toddler cups, and food jars fit in the warmer. The warmer is fast and easy to operate - just plug in and flip the on/off switch on the back of the unit. A neon light lets you know the unit is on and working. An included instruction guide makes it easy to calculate the correct heat-up time. Operation involves adding water and turning the dial. A light blinks to indicate that the contents are properly warmed to a safe temperature. To be sure, always test the internal temperature before giving to babies.",
    price:18.91,
    quantity:24)
p3.photo.attach(io: File.open("./app/assets/images/bottle_warmer.jpeg"),filename:"bottle_warmer.jpeg")


p4=Product.create(
    seller_id:user2.id,
    title:"BABYBJORN Soft Bib - Pink/Green (2 pack)",
    description:"The BABYBJORN Soft Bib is ergonomically designed to fit your child perfectly. This soft and comfortable bib catches food that “misses” baby’s mouth.",
    price:13.91,
    quantity:24)
p4.photo.attach(io: File.open("./app/assets/images/baby-bjorn-soft-bib.jpg"),filename:"baby-bjorn-soft-bib.jpg")

p5=Product.create(
    seller_id:user1.id,
    title:"The First Years Stack Up Cups",
    description:"Classic toys like nesting cups are all-time favorites because they offer all kinds of fun. Children love to fit them together, to stack them up to build a pyramid, to put things in then take them out, to turn them over and hide things underneath. Dishwasher-safe.",
    price:19.91,
    quantity:224)
p5.photo.attach(io: File.open("./app/assets/images/Kids-Fun-Piles-Cup.jpg"),filename:"Kids-Fun-Piles-Cup.jpg")


p6=Product.create(
    seller_id:user1.id,
    title:"Manhattan Toy Winkel Rattle and Sensory Teether Toy",
    description:"Time Honored Classic The Winkel rattle and teether, by Manhattan Toy, is an award-winning classic, a true “must have” for parents and infants. Its maze of soft, continuous tubes and its stunning colors instantly capture and hold baby’s attention. The mesmerizing loop design and lightweight construction make it very easy for little hands to grab, hold and rattle – a perfect clutching toy to engage baby’s gross motor skills. The center cube features a quiet rattle so baby can explore sound and cause and effect. The soft, pliable loops are BPA-free for teething or gumming babies. Winkel can also be refrigerated to provide a more soothing experience for particularly sore baby gums and teeth. Winkel’s patented design and developmental features have made it a baby favorite, parent “go to” for over 25 years. Since 1979, Manhattan Toy has been making award-winning, high quality, educational toys for your baby, toddler or kid. From infant toys and baby toys to sensory development toys, our goal is to provide the safest and best toys available. All of our products, from the newest concepts to our time-tested classics, are innovatively designed to inspire imaginative play and are routinely safety teste",
    price:129.91,
    quantity:224)
p6.photo.attach(io: File.open("./app/assets/images/Manhattan-Winkel-Rattle-and-Sensory-Teether-Activity-Rings.jpg"),filename:"Manhattan-Winkel-Rattle-and-Sensory-Teether-Activity-Rings.jpg")


p7=Product.create(
    seller_id:user2.id,
    title:"Maya Montero Toronto White and Red Little Girls Christmas Party Dress",
    description:"Our unique and beautiful digitally printed Maple Leaf's on duchess satin little girls dress has been inspired by our love for the autumn season and the iconic Canadian Maple Leaves. This designer style dress has been made of 100% polyester satin main fabric with a full taffeta anti-scratch lining. The dress features are hand-sewn pearl appliqué around the neckline and sleeves with a YKK brand hidden back zipper. Our dresses are made for the runway priced to wear everyday. Perfect for special occasions, church, weddings, Christmas parties and birthday parties. Each dress is fit to size and appliqués are sewn by hand for a chic and unique look and a naturally comfortable fit.",
    price:19.91,
    quantity:224)
p7.photo.attach(io: File.open("./app/assets/images/dress1.jpg"),filename:"dress1.jpg")


p8=Product.create(
    seller_id:user1.id,
    title:"READY TO SHIP: Girls Toddler Dress Shoes Mary Jane - Avery Slate (Grey)",
    description:"-Real genuine patent leather and velvet material
    -Single strap design with gold buckle
    -Flexible rubber hard sole that is slip resistant and wear resistant 
    -Inside lining and insole - PU Pig leather
    -Vintage Colorway design contains stitched detailing with perforated design at the cap with ribbed cotton lining",
    price:19.91,
    quantity:224)
p8.photo.attach(io: File.open("./app/assets/images/shoes.jpg"),filename:"shoes.jpg")

p1=Product.create(seller_id:user1.id,title:"Maya Montero Toronto White and Red Little Girls Christmas Party Dress",description:"Our unique and beautiful digitally printed Maple Leaf's on duchess satin little girls dress has been inspired by our love for the autumn season and the iconic Canadian Maple Leaves. This designer style dress has been made of 100% polyester satin main fabric with a full taffeta anti-scratch lining. The dress features are hand-sewn pearl appliqué around the neckline and sleeves with a YKK brand hidden back zipper. Our dresses are made for the runway priced to wear everyday. Perfect for special occasions, church, weddings, Christmas parties and birthday parties. Each dress is fit to size and appliqués are sewn by hand for a chic and unique look and a naturally comfortable fit.",price:23,quantity:2)
p1.photo.attach(io: File.open("./app/assets/images/doll2.jpg"),filename:"doll2.jpg")