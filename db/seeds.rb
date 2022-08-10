# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

beach1 = Beach.create(name: 'Good Harbor Beach', 
             town: 'Gloucester', 
             state: 'MA', 
             description: 'Located on Thatcher Road/Route 127A, Good Harbor is a beautiful beach with lovely white sand. At low tide, one can walk out to Salt Island, while at high tide, one can enjoy body surfing or boogie boards.', 
             url:'https://www.gloucester-ma.gov/1215/Gloucester-Beaches---Detailed-Informatio', 
             image: 'https://flic.kr/p/8WoLFj'
            )
beach2 = Beach.create(name: 'Wingaersheek',
             town: 'Gloucester', 
             state: 'MA', 
             description: 'Situated in the western part of Gloucester at the end of Atlantic Street off Route 133 and Concord Street, this beautiful beach runs along the Annisquam River and Ipswich Bay. At low tide, the beach extends out for hundreds of yards and a long sandbar is exposed, making for a great place to walk.', 
             url: 'https://www.gloucester-ma.gov/1215/Gloucester-Beaches---Detailed-Informatio', 
             image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Wingaersheek_sunset.JPG/802px-Wingaersheek_sunset.JPG?20120919010648' )
Beach.create(name: 'Stage Fort Park', 
             town: 'Gloucester', 
             state: 'MA', 
             description: 'This historic park is the site of Gloucester’s first settlers in 1623 who set up fishing stages on this land upon arrival. Stage Fort Park is home to Half Moon and Cressy’s beaches, with access to a sand volleyball court, a beautiful new playground, a baseball field, a basketball court, and tennis courts. There are plenty of picnic tables and cStage Fort Parkooking areas (bring your own grill), a privately owned restaurant that is open to the public, an information center, and restrooms. During the summer season, there are outdoor concerts, fireworks, and storytelling events for children, festivals, farmers markets, and several other events.', 
             url: 'https://www.gloucester-ma.gov/450/Parks-and-Recreational-Facilities', 
             image: 'https://flic.kr/p/Lyrku8')
Beach.create(name: 'Singing Beach', 
             town: 'Manchester-by-the-Sea',
             state: 'MA',
             description: 'Stretching in a graceful curve nearly three quarters of a mile is one of the most beautiful strands of beach in New England, if not the entire United States! Flanked by two protective promontories – Eagle Head to the North, and Pickwith Point to the south – Singing Beach is renowned for the unique texture of its fine white sand. When ocean bathing became popular in the late 19th century, visitors discovered our beach has another unique characteristic – the sands produce a magical musical sound when walked upon!', 
             url: 'http://www.manchester.ma.us/Facilities/Facility/Details/Singing-Beach-11', 
             image: 'https://flic.kr/p/MMhM5C')
Beach.create(name: 'Dane Street Beach', 
             town: 'Beverly',
             state: 'MA',
             description: 'This large, beautiful, sandy beach features acres of open, grass fields and one of the city’s most popular children’s play structures. Limited, free public parking available for both residents as well as non residents.  On-street parking available. ', 
             url: 'https://www.bevrec.com/beaches', 
             image: 'https://flic.kr/p/Uv3Ksa')
Beach.create(name: 'Salem Willows Beach', 
             town: 'Salem',
             state: 'MA',
             description: 'Salem Willows is an oceanfront park in Salem, Massachusetts. It is named for the European white willow trees planted there in 1801 to form a shaded walk for patients convalescing at a nearby smallpox hospital. The area became a public park in 1858, and in the twentieth century became a summer destination for residents of Boston\'s North Shore', 
             url: 'https://en.wikipedia.org/wiki/Salem_Willows', 
             image: 'https://flic.kr/p/W4fhHn')

review1 = Review.create(
            title: "A beach that makes you feel poetic",
            rating: 3,
            text: "A tasteful beach, with sloping dunes and waves that crash upon the stalwart shore sending misty foam up towards the flocking gulls. Hows this for realistic NICK - ___ -",
            beach_id: beach1.id
)

review2 = Review.create(
            title: "Brings up old memories",
            rating: 3,
            text: "When I was a wee lad my papá used to take me down to the beach to collect shells. What a grand time it twas and what a great beach. One time one of the shells was a crab and it pinched me though, so this is a 3",
            beach_id: beach1.id
)

admin1 = User.create(email: "myemail@gmail.com", role:"admin", password:"111111", password_confirmation:"111111" })