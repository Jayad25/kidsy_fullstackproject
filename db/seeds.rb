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


# p.photo.attach(io: File.open("/Users/swapnadammalapati/Desktop/Project/kidsy/app/assets/images/doll2.jpg"),file_name:"doll2.jpg")

Product.delete_all
User.delete_all
 user1=User.create!(username: 'username',password: 'password',email:"chj@hm.com")


 p1=Product.create(seller_id:user1.id,title:"Maya Montero Toronto White and Red Little Girls Christmas Party Dress",description:"Our unique and beautiful digitally printed Maple Leaf's on duchess satin little girls dress has been inspired by our love for the autumn season and the iconic Canadian Maple Leaves. This designer style dress has been made of 100% polyester satin main fabric with a full taffeta anti-scratch lining. The dress features are hand-sewn pearl appliqué around the neckline and sleeves with a YKK brand hidden back zipper. Our dresses are made for the runway priced to wear everyday. Perfect for special occasions, church, weddings, Christmas parties and birthday parties. Each dress is fit to size and appliqués are sewn by hand for a chic and unique look and a naturally comfortable fit.",price:23,quantity:2)
    p1.photo.attach(io: File.open("/Users/swapnadammalapati/Desktop/Project/kidsy/app/assets/images/doll2.jpg"),filename:"doll2.jpg")
# p2=Product.create(seller_id:user1.id,title:"Maya Montero Toronto White and Red Little Girls Christmas Party Dress",description:"Our unique and beautiful digitally printed Maple Leaf's on duchess satin little girls dress has been inspired by our love for the autumn season and the iconic Canadian Maple Leaves. This designer style dress has been made of 100% polyester satin main fabric with a full taffeta anti-scratch lining. The dress features are hand-sewn pearl appliqué around the neckline and sleeves with a YKK brand hidden back zipper. Our dresses are made for the runway priced to wear everyday. Perfect for special occasions, church, weddings, Christmas parties and birthday parties. Each dress is fit to size and appliqués are sewn by hand for a chic and unique look and a naturally comfortable fit.",price:23,quantity:2)
# p2.photo.attach(io: File.open("/Users/swapnadammalapati/Desktop/Project/kidsy/app/assets/images/doll2.jpg"),filename:"doll2.jpg")
