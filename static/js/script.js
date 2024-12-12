const districts = [
    {
        name: "Chennai",
        details: "Chennai, the capital city of Tamil Nadu, is located on the southeastern coast of India along the Bay of Bengal. Known as the 'Gateway to South India,' Chennai is one of the largest cultural, economic, and educational hubs in the country. It serves as an important port city with historical significance dating back to the British colonial period. The city is famous for its thriving IT and automobile industries, with global companies like Infosys, TCS, and Hyundai establishing their presence here. Chennai is also home to ancient temples like the Kapaleeshwarar Temple and the Parthasarathy Temple, contributing to its reputation as a significant religious center. The city has a rich cultural heritage in classical music and dance, especially Bharatanatyam, which is performed at the annual Madras Music Season. Apart from its urban growth, Chennai has several beautiful beaches, including Marina Beach, one of the longest urban beaches in the world. The city's architecture is a blend of colonial, modern, and traditional Tamil styles, making it an interesting place for architecture enthusiasts. Chennai also boasts a range of educational institutions like the University of Madras, IIT Madras, and the prestigious Madras Medical College."
    },
    {
        name: "Coimbatore",
        details: "Coimbatore is often referred to as the 'Manchester of South India' because of its prominent role in the textile industry. Located in the western part of Tamil Nadu, Coimbatore is surrounded by the Western Ghats, making it a picturesque and calm city with pleasant weather. The district is known for its industrial prowess, particularly in textiles, motors, and engineering goods. Coimbatore is home to numerous textile mills, engineering companies, and educational institutions, including the Coimbatore Institute of Technology and PSG Tech. The city also has a rich cultural tradition, with various temples like the Marudamalai Temple, and it is famous for the nearby hill station, Ooty, which is a popular tourist destination. Agriculture in the region is dominated by crops like cotton, bananas, and vegetables. Coimbatore's proximity to Kerala and its location on the banks of the Noyyal River further enhances its agricultural significance. The district's growing IT sector also includes multinational corporations like Cognizant, TCS, and others setting up offices here."
    },
    {
        name: "Madurai",
        details: "Madurai is one of the oldest continuously inhabited cities in the world, with a history dating back over 2,500 years. Known as the 'City of Temples,' Madurai is famous for the Meenakshi Amman Temple, an architectural marvel with stunning sculptures and intricately carved pillars. The city is an important cultural and religious center for Tamil Hindus and attracts millions of pilgrims annually. Madurai has a thriving trade and economy based on agriculture, textiles, and food processing. It is the center of the Tamil film industry and has produced many famous Tamil actors and directors. The region is also known for its famous 'Madurai Jigar Thanda' and other local delicacies. Madurai's education sector is robust, with many prestigious institutions like Madurai Kamaraj University and Thiagarajar College of Engineering. The city's proximity to the famous hill station of Kodaikanal makes it a popular gateway for tourists."
    },
    {
        name: "Tiruchirappalli",
        details: "Tiruchirappalli, also called Trichy, is a major educational and administrative hub in Tamil Nadu. Located on the banks of the Kaveri River, it is one of the oldest cities in the state with a rich history dating back to the Chola dynasty. The city is known for its historical monuments like the Rock Fort Temple and the Ranganathaswamy Temple. Tiruchirappalli is a vital industrial center, with industries focusing on engineering, food processing, and manufacturing. The district also plays an important role in the education sector with renowned institutions such as Bharathidasan University and the National Institute of Technology, Tiruchirappalli (NIT-Trichy). The city is also famous for its temples, making it a significant pilgrimage site for Hindus."
    },
    {
        name: "Salem",
        details: "Salem is located in the heart of Tamil Nadu and is known for its steel production, agricultural activities, and as a major trade center in the state. Salem is often referred to as the 'Steel City' of Tamil Nadu due to its role in steel manufacturing and the presence of companies like Salem Steel Plant. The district is also famous for its extensive agricultural production, particularly in crops such as groundnut, turmeric, and bananas. Salem has a rich cultural heritage, with various temples like the Kottai Mariamman Temple and the Sugavaneswarar Temple. The region is also a key center for education, with institutions like Periyar University and the Government Arts College contributing to the academic landscape. The nearby hill station of Yercaud is a popular tourist destination known for its scenic beauty."
    },
    {
        name: "Tirunelveli",
        details: "Tirunelveli, often referred to as the 'Cradle of Tamil Nadu's Cultural Heritage,' is a district rich in history, culture, and religion. Known for its historic temples, Tirunelveli is home to the famous Nellaiappar Temple and the Mundanthurai Tiger Reserve. The district is known for its agriculture, especially the cultivation of rice, bananas, and the famous Tirunelveli halwa. The region is also famous for its diverse wildlife, with the Kalakad Mundanthurai Tiger Reserve serving as a crucial sanctuary for several endangered species. Tirunelveli has a thriving educational sector, with institutions like the Tirunelveli Medical College and Manonmaniam Sundaranar University providing high-quality education. The district is also famous for its rich cultural traditions, including Tamil classical music and dance."
    },
    {
        name: "Vellore",
        details: "Vellore is a prominent district located in the northeastern part of Tamil Nadu, known for its educational institutions and historical significance. The district is home to the prestigious VIT University, which is one of India's top private universities. Vellore is also known for its fort, the Vellore Fort, which dates back to the 16th century and houses several important structures such as the Jalakandeswarar Temple. The city is a hub for healthcare with the world-renowned Christian Medical College (CMC) offering top-tier medical services and education. The region is also recognized for its industrial growth, particularly in textiles, leather, and engineering sectors. Vellore has a rich history, and the fort serves as a testament to the district's strategic importance in the past."
    },
    {
        name: "Erode",
        details: "Erode is an important district in Tamil Nadu, primarily known for its textile industries and its production of turmeric and handloom products. The city is one of the leading textile producers in the state, with a large number of textile mills and garment factories. The district's famous turmeric, often referred to as 'Erode turmeric,' is used across India and internationally. Erode is also known for its agricultural production, with crops like cotton, groundnut, and vegetables being grown in abundance. The region has a strong cultural heritage, with numerous temples like the Periyar Temple and the Bhavani Sangameshwarar Temple. Erode is also becoming an educational hub with several schools and colleges offering various degree programs."
    },
    {
        name: "Dindigul",
        details: "Dindigul is a district located in the central part of Tamil Nadu, known for its lock industry, as well as its beautiful hill station, Kodaikanal, nearby. The district's lock industry, which dates back over 150 years, makes it one of the largest producers of locks in India. Agriculture plays an important role in Dindigul's economy, with crops like groundnut, cotton, and bananas being major contributors. The region is also famous for its high-quality biryani, which is a popular dish among locals and visitors alike. Dindigul's proximity to Kodaikanal makes it an ideal destination for tourists seeking a cool climate and scenic views. The city also has a number of temples and is home to the famous Dindigul Fort."
    },
    {
        name: "Kanchipuram",
        details: "Kanchipuram, also known as the 'City of Thousand Temples,' is a district rich in history, culture, and religious significance. Located in the northern part of Tamil Nadu, Kanchipuram is famous for its silk sarees, which are woven with the finest materials and are exported worldwide. The district is also home to several historical temples, including the Kanchi Kamakshi Amman Temple, which is a major pilgrimage destination. The city has been an important center for learning, especially in the fields of philosophy and Sanskrit. Kanchipuram is also known for its architectural marvels and is an important destination for cultural tourism. The district is rapidly developing in terms of infrastructure and is becoming an important hub for industries like textiles, electronics, and education."
    }
    // You can add more districts following the same pattern
];




// Function to populate the select dropdown dynamically
function populateDistrictDropdown() {
    const selectElement = document.getElementById('district-select');
    
    // Create option elements for each district and append to the select dropdown
    districts.forEach(district => {
        const option = document.createElement('option');
        option.value = district.name;
        option.textContent = district.name;
        selectElement.appendChild(option);
    });
}

// Function to display selected district details
function showDistrictDetails() {
    const selectedDistrictName = document.getElementById('district-select').value;
    const districtDetailsDiv = document.getElementById('district-details');
    
    // Find the details of the selected district
    const district = districts.find(d => d.name === selectedDistrictName);
    
    if (district) {
        districtDetailsDiv.innerHTML = `
            <h2>${district.name}</h2>
            <p>${district.details}</p>
        `;
        districtDetailsDiv.style.display = 'block';
    } else {
        districtDetailsDiv.innerHTML = '';
        districtDetailsDiv.style.display = 'none';
    }
}

// Load the district options when the page loads
window.onload = () => {
    populateDistrictDropdown();

    // Event listener for dropdown change to show the selected district's details
    document.getElementById('district-select').addEventListener('change', showDistrictDetails);
};
