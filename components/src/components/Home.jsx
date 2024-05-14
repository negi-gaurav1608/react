import React from 'react';
import Cards from './Cards';

function Home() {
    return (
        <div className="bg-white">
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='p-6 mr-2 bg-gray-100 sm:rounded-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum temporibus voluptas, praesentium expedita corporis dignissimos. Quaerat molestias inventore eum culpa accusamus labore adipisci nulla neque incidunt rerum obcaecati, quod deleniti quis ea dolor asperiores odit quisquam consequatur unde doloribus voluptatem! Veniam laborum deserunt exercitationem corporis error architecto, repellendus vel unde distinctio hic quas assumenda laboriosam vero. Unde odit non sapiente ipsa officia animi quae, error, assumenda cumque tempore aperiam ipsam laborum nulla voluptatibus velit harum quas corporis aliquid quod voluptates accusantium dicta inventore quibusdam sit! Totam assumenda recusandae repellat nisi maiores quidem officia velit, ullam perferendis, numquam sit itaque quis ipsum suscipit ipsa eligendi aut ad qui iste animi laborum. Voluptates magni, sit alias molestiae id beatae at natus error! Et distinctio voluptatum sequi quae delectus, inventore maxime error possimus incidunt ab, temporibus tempore nihil nam ex hic minima tenetur voluptate alias dolor illo aut quasi. Animi assumenda, error repellendus dolores libero similique cumque. Cumque vitae, aperiam veniam cupiditate voluptatibus quasi nesciunt molestiae, iusto neque debitis esse eaque. Provident, unde deleniti. Nam magnam dolorem ex incidunt, eius molestias? Dolorem voluptate aut, commodi harum nam similique possimus non illo. Esse laborum sint dolorem dicta veritatis! Quis sit, necessitatibus labore quas corrupti nisi illum architecto, blanditiis molestiae, explicabo velit consectetur ad perferendis perspiciatis similique nemo sunt iure animi numquam. Perferendis commodi ipsum quasi atque unde inventore nam ipsa accusantium soluta, suscipit ab error libero, dignissimos quae obcaecati saepe ex sunt eum sit? Maiores facere aut error nam quisquam, dolor sit corrupti fugiat architecto, molestiae ducimus perspiciatis modi. Recusandae odit a aperiam debitis qui ut laudantium officiis quod iusto pariatur ea error in iure, officia tenetur velit fugit voluptate provident voluptatem praesentium, sequi tempore sunt minima rerum. Nesciunt soluta aut doloribus quae. Natus ipsum placeat, qui culpa repudiandae illo recusandae ex voluptatibus voluptates?
                </div>
                <div className='p-6 mr-2 bg-gray-100 sm:rounded-lg'>
                    <img src="https://images.pexels.com/photos/20068318/pexels-photo-20068318/free-photo-of-man-wearing-brown-jacket-in-a-narrow-alley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="user"/>
                </div>

            </div>
            <div className='mt-3'>
                <Cards
                    data="Tuhjbaskjvfhnckabn ashihahbisdfhviu hsvbujahi vsddhiuvhga sHVIuvfgsubiSCV G jBIU sGBIU cUVS Giusvbc vihdfibsgdiuhiavjbv gu CIShi SVUIC UVahvdsihbv"
                    user="Gaurav Negi"
                    position="Student"
                    img="https://images.pexels.com/photos/14993359/pexels-photo-14993359/free-photo-of-white-sailboat-on-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />

                <Cards
                    data="Tuhjbaskjvnsvkl n  v;s,d;v mlnkl nvjdzvgnkj ihahbisdfhviu hsvbujahi vsddhiuvhga sHVIuvfgsubiSCV G jBIU sGBIU cUVS Giusvbc vihdfibsgdiuhiavjbv gu CIShi SVUIC UVahvdsihbv"
                    user="Abhinav"
                    position="president"
                    img="https://images.pexels.com/photos/21905722/pexels-photo-21905722/free-photo-of-a-man-in-a-helmet-and-backpack-standing-on-top-of-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />

            </div>

            <div>
                <img src="https://images.pexels.com/photos/20147082/pexels-photo-20147082/free-photo-of-a-sunset-over-a-river-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="pics"></img>
            </div>
        </div>
    );
}

export default Home
