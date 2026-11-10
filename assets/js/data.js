/* =========================================================
   WAVE Lab 홈페이지 데이터
   - 논문, 구성원, 뉴스, 과제는 모두 이 파일에서 수정합니다.
   - 새 항목은 각 목록의 맨 위에 추가하세요 (최신순).
   ========================================================= */

window.LAB = {
  name: "WAVE Lab",
  fullName: "Water Analytics for Variability & Extremes Laboratory",
  nameKo: "지능형 수자원 연구실",
  dept: "Department of Civil and Environmental Engineering",
  deptKo: "한남대학교 건설환경공학과",
  univ: "Hannam University",
  email: "jinwook213@hnu.kr",
  phone: "+82-42-629-7355",
  address: "70 Hannam-ro, Daedeok-gu, Daejeon 34430, Republic of Korea",
  addressKo: "대전광역시 대덕구 한남로 70 한남대학교 (34430)",
  scholar: "https://scholar.google.co.kr/citations?user=mrKgYBsAAAAJ&hl=en",
  linkedin: "https://www.linkedin.com/in/jinwook213",
  office: "Room 6, 10th Floor, College of Engineering Building",
  officeKo: "공과대학 10층 6호"
};

/* ---------------- 구성원 ----------------
   role 예시: "Ph.D. Student", "M.S. Student", "Undergraduate Researcher", "Alumni"
   photo: "assets/img/people/파일명.jpg" (없으면 이니셜 표시)
*/
window.MEMBERS = [
  // { name: "홍길동", nameEn: "Gildong Hong", role: "Undergraduate Researcher", roleKo: "학부연구생", since: "2026", program: "B.S. Student (entered 2023)", email: "", interests: "SAR flood detection", photo: "" },
  { name: "장태검", nameEn: "Taegeom Jang", role: "Undergraduate Researcher", roleKo: "학부연구생", since: "2026", program: "B.S. Student (entered 2023)", programKo: "학부생 (2023학번)", photo: "assets/img/people/taegeom-jang.webp" },
  { name: "정우영", nameEn: "Wooyoung Jung", role: "Undergraduate Researcher", roleKo: "학부연구생", since: "2026", program: "B.S. Student (entered 2023)", programKo: "학부생 (2023학번)", photo: "assets/img/people/wooyoung-jung.webp" },
];

/* ---------------- 뉴스 ---------------- */
window.NEWS = [
  { date: "2026", cat: "Patent", text: "Korean patent registered (No. 10-2989545): <i>System and method for distinguishing rainfall and snowfall using CCTV images</i>.", textKo: "국내 특허 등록 (제10-2989545호): <i>CCTV 영상을 이용한 강우와 강설 판별 시스템 및 방법</i>." },
  { date: "2026.06", cat: "Project", text: "New projects launched: UNESCO IHP ecohydrology demonstration-site guidelines, and core satellite image analysis technologies for disaster detection (Ministry of Education).", textKo: "신규 과제 착수: 유네스코 IHP 생태수문 시범지역 운영 지침 개발 연구, 재난 탐지를 위한 위성영상 분석 핵심기술 개발(교육부)." },
  { date: "2026.05", cat: "Award", text: "Best Paper Award at the 2026 Korea Water Resources Association Conference — <i>Flood detection using polarimetric decomposition and machine learning with ALOS-2 PolSAR</i>.", textKo: "2026 한국수자원학회 학술발표회 우수논문상 수상 — <i>ALOS-2 PolSAR 편파 분해와 머신러닝을 이용한 홍수 탐지</i>." },
  { date: "2026.04", cat: "Conference", text: "Presented PolSAR-based flood detection for infrastructure risk monitoring at the Korea Institute for Structural Maintenance and Inspection conference (Busan).", textKo: "한국구조물진단유지관리공학회 학술대회(부산)에서 기반시설 위험 모니터링을 위한 PolSAR 기반 홍수 탐지 연구를 발표했습니다." },
  { date: "2026.03", cat: "Lab", text: "WAVE Lab opens at the Department of Civil and Environmental Engineering, Hannam University. Prof. Jinwook Lee joins as Assistant Professor.", textKo: "한남대학교 건설환경공학과에 WAVE Lab(지능형 수자원 연구실)이 문을 열었습니다. 이진욱 교수가 조교수로 부임했습니다." },
  { date: "2026", cat: "Paper", text: "Paper published in <i>Geoscience Frontiers</i>: Enhancing flood mapping precision through C-band PolSAR decompositions and feature-optimized deep learning.", textKo: "<i>Geoscience Frontiers</i> 논문 게재: Enhancing flood mapping precision through C-band PolSAR decompositions and feature-optimized deep learning." },
  { date: "2026", cat: "Paper", text: "Paper published in <i>Journal of Hydrology: Regional Studies</i>: Hybrid machine learning framework for hourly wastewater inflow forecasting in Oahu, Hawaii.", textKo: "<i>Journal of Hydrology: Regional Studies</i> 논문 게재: 하와이 오아후 하수처리장의 시간 단위 유입량 예측을 위한 하이브리드 머신러닝 기법." },
  { date: "2025", cat: "Paper", text: "Paper published in <i>Science of The Total Environment</i>: Observed intensification of temporally compound dry–wet transitions across East Asia.", textKo: "<i>Science of The Total Environment</i> 논문 게재: 동아시아에서 관측된 복합 건습 전환의 심화." }
];

/* ---------------- 연구 과제 ---------------- */
window.PROJECTS = [
  { title: "Action and Advisory Research for Developing Operational Guidelines for UNESCO Ecohydrology Demonstration Sites in Korea", titleKo: "국내 유네스코 생태수문 시범지역 운영 지침 개발을 위한 실행 및 자문 연구", funder: "Korean National Committee for UNESCO IHP", funderKo: "유네스코 IHP 한국위원회", period: "2026.06 – Present", ongoing: true },
  { title: "Development of Core Satellite Image Analysis Technologies for Disaster Detection", titleKo: "재난 탐지를 위한 위성영상 분석 핵심기술 개발", funder: "Ministry of Education, Republic of Korea", funderKo: "교육부", period: "2026.06 – Present", ongoing: true },
  { title: "Hybrid-NDT Development Global Basic Research Center for Concrete Durability Performance Evaluation", titleKo: "콘크리트 내구성능 평가를 위한 Hybrid-NDT 개발 글로벌 기초연구센터", funder: "National Research Foundation of Korea", funderKo: "한국연구재단", period: "2026.04 – Present", ongoing: true },
  { title: "Enhancing Flood Detection and Mapping by Using PolSAR, Metaheuristic, and Deep Learning Algorithms", titleKo: "PolSAR, 메타휴리스틱, 딥러닝 알고리즘을 이용한 홍수 탐지 및 지도화 고도화", funder: "National Science Foundation (NASA RII Track-4)", funderKo: "미국 국립과학재단 (NSF, NASA RII Track-4)", period: "", ongoing: false },
  { title: "Forecasting Evapotranspiration and Rainfall for Water Resources Conservation and Sustainable Agriculture", titleKo: "수자원 보전과 지속 가능한 농업을 위한 증발산 및 강우 예측", funder: "United States Department of Agriculture", funderKo: "미국 농무부 (USDA)", period: "", ongoing: false },
  { title: "Development of AI-based Rainfall Estimation Model Using Multisensor (Principal Investigator)", titleKo: "다중센서를 이용한 AI 기반 강우 추정 모델 개발 (연구책임자)", funder: "Ministry of Education", funderKo: "교육부", period: "", ongoing: false },
  { title: "Research on CCTV Image-based Precipitation Estimation Method (I) & (II)", titleKo: "CCTV 영상 기반 강수량 산정 기법 연구 (I), (II)", funder: "Korea Meteorological Institute", period: "", ongoing: false },
  { title: "Development of Rainfall Scenarios Considering Temporal Characteristics of Independent Rainfall Events", titleKo: "독립 호우사상의 시간적 특성을 고려한 강우 시나리오 개발", funder: "Korea Institute of Civil Engineering and Building Technology (KICT)", funderKo: "한국건설기술연구원 (KICT)", period: "2023.10 – 2023.12", ongoing: false },
  { title: "Study on the Construction and Validation of Standard/Raw CCTV Rainfall & Snowfall Video Datasets", titleKo: "CCTV 강우·강설 표준/원시 영상 데이터셋 구축 및 검증 연구", funder: "Korea Conformity Laboratories (KCL)", funderKo: "한국건설생활환경시험연구원 (KCL)", period: "2022.11 – 2023.02", ongoing: false },
  { title: "Construction of Rainfall Video Database Under Various Conditions Using CCTV", titleKo: "CCTV를 활용한 다양한 조건의 강우 영상 데이터베이스 구축", funder: "Korea Conformity Laboratories (KCL)", funderKo: "한국건설생활환경시험연구원 (KCL)", period: "2021.10 – 2021.12", ongoing: false },
  { title: "Construction and Analysis of Calibration Instrument Data for Rainfall Radar", titleKo: "강우레이더 검교정 장비 자료 구축 및 분석", funder: "Korea Institute of Civil Engineering and Building Technology (KICT)", funderKo: "한국건설기술연구원 (KICT)", period: "2021.10 – 2021.12", ongoing: false }
];

/* ---------------- 논문 ----------------
   type: "intl" 국제학술지 / "kr" 국내학술지 / "conf" 국제학술대회 / "patent" 특허
   featured: true → 홈 화면 "Selected Publications"에 표시
   note: 수상 등 배지 (예: "Best Case Study")
*/
window.PUBS = [
  // ===== International Journals =====
  { type: "intl", year: 2026, featured: true, authors: "Kim, S., Lee, J., Janizadeh, S., Bateni, S. M., Kim, D., Jun, C., Auligne, T., & Heggy, E.", title: "Enhancing flood mapping precision through C-band PolSAR decompositions and feature-optimized deep learning", venue: "Geoscience Frontiers, 102473", doi: "10.1016/j.gsf.2026.102473" },
  { type: "intl", year: 2026, authors: "Kivi, S. S., Lee, J., Bateni, S. M., Deenik, J., Jun, C., Kim, D., & Jamei, M.", title: "Unraveling the effects of univariate and multivariate signal decomposition techniques on daily reference evapotranspiration forecasting", venue: "Computers and Electronics in Agriculture, 112451", doi: "10.1016/j.compag.2026.112451" },
  { type: "intl", year: 2026, featured: true, authors: "Lee, J., Bateni, S. M., Kim, D., Jun, C., Babcock, R., & Azizi, S.", title: "An integrated data decomposition and feature selection–based hybrid machine learning framework for enhanced hourly wastewater inflow forecasting at a wastewater treatment plant in Oahu, Hawaii", venue: "Journal of Hydrology: Regional Studies, 67, 103877", doi: "10.1016/j.ejrh.2026.103877" },
  { type: "intl", year: 2026, authors: "Kim, S., Kim, D., Lee, J., Bateni, S. M., Ahmad, W., & Park, J.*", title: "A novel approach of mapping snow disaster-prone areas based on areal disaster density optimization: a case study of South Korea", venue: "Natural Hazards, 122(2), 80", doi: "10.1007/s11069-025-07761-8" },
  { type: "intl", year: 2026, featured: true, authors: "Lee, J., Janizadeh, S., Melancon, A., Bateni, S. M., Kim, D., Molthan, A., Jun, C.*, Farhadiani, R., Homayouni, S., & Dinka, M.", title: "Flood detection using PolSAR decomposition, feature selection, and deep learning", venue: "Gondwana Research, 152, 212–233", doi: "10.1016/j.gr.2025.06.022" },
  { type: "intl", year: 2025, featured: true, authors: "Lee, J., Cho, E., Jun, C., Najafi, M. R., Yoo, C., & Na, W.*", title: "Observed intensification of temporally compound dry–wet transitions and serial combinations across East Asia", venue: "Science of The Total Environment, 1002, 180591", doi: "10.1016/j.scitotenv.2025.180591" },
  { type: "intl", year: 2025, authors: "Saleem, M. A., Shoaib, M., Hashim, S., et al.", title: "Projecting future climate extremes in the glacier-fed upper Indus basin using machine learning based downscaling of CMIP6 GCMs", venue: "Theoretical and Applied Climatology, 156, 567", doi: "10.1007/s00704-025-05793-5" },
  { type: "intl", year: 2025, authors: "Hwang, S., Lee, J., De Michele, C., Byun, J., Jung, D., & Jun, C.*", title: "Rainfall intensity estimation via raindrop sounds leveraging convolutional neural networks and low-cost IoT sensors", venue: "Steel and Composite Structures, 56(6), 539–550", doi: "10.12989/scs.2025.56.6.539" },
  { type: "intl", year: 2025, authors: "Saleem, M. A., Shoaib, M., Hashim, S., Shoaib, M., Farid, H. U., Ghaffar, M. A., Ismail, M., Ameen, A., Lee, J., Inam, M. A., & Jun, C.", title: "Machine learning-based streamflow projections in the Upper Indus Basin under CMIP6 climate scenarios", venue: "Physics and Chemistry of the Earth, 140, 104035", doi: "10.1016/j.pce.2025.104035" },
  { type: "intl", year: 2025, authors: "Iftakhar, N., Islam, F., Hussain, M. I., Ahmad, M. N., Lee, J., Rehman, N. U., Qaysi, S., Alarifi, N., & Youssef, Y. M.*", title: "Revealing land-use dynamics on thermal environment of riverine cities under climate variability using remote sensing and geospatial techniques", venue: "ISPRS International Journal of Geo-Information, 14(1), 13", doi: "10.3390/ijgi14010013" },
  { type: "intl", year: 2024, authors: "Lee, J., Yoo, C.*, & Hong, S.", title: "Limited applicability of rational formula in the presence of storage effect", venue: "Steel and Composite Structures, 53(6), 749–761", doi: "10.12989/scs.2024.53.6.749" },
  { type: "intl", year: 2024, authors: "Sathiyamurthi, S., Subbarayan, S., Ramya, M., Sivasakthi, M., Gobi, R., Qaysi, S., Kumar, S. P., Lee, J., Alarifi, N., Wahba, M., & Youssef, Y. M.*", title: "Advancing agricultural land suitability in urbanized semi-arid environments: insights from geospatial and machine learning approaches", venue: "ISPRS International Journal of Geo-Information, 13(12), 436", doi: "10.3390/ijgi13120436" },
  { type: "intl", year: 2024, authors: "Cha, H., Baik, J., Lee, J., Na, W., & Jun, C.*", title: "Generation of rainfall scenarios based on rainfall transition probability to determine temporal distribution of independent rainstorms", venue: "Stochastic Environmental Research and Risk Assessment, 1–19", doi: "10.1007/s00477-024-02844-7" },
  { type: "intl", year: 2024, authors: "Lee, J., Oh, S.*, Baik, J., Jun, C., Seo, J., & Lee, E. H.*", title: "Grid-based precipitation quantile estimation considering homogeneity using ERA5-Land data for the Korean Peninsula", venue: "Sustainability, 16, 9295", doi: "10.3390/su16219295" },
  { type: "intl", year: 2024, authors: "Osmani, S. A., Jun, C.*, Baik, J., Lee, J., & Narimani, R.", title: "Wavelet-based precipitation preprocessing for improved drought forecasting: a machine learning approach using tunable Q-factor wavelet transform and maximum overlap discrete wavelet transform", venue: "Expert Systems with Applications, 124962", doi: "10.1016/j.eswa.2024.124962" },
  { type: "intl", year: 2024, authors: "Hwang, S., Jun, C., De Michele, C., Kim, H.-J., & Lee, J.*", title: "Rainfall observation leveraging raindrop sounds acquired using waterproof enclosure: exploring optimal length of sounds for frequency analysis", venue: "Sensors, 24(13), 4281", doi: "10.3390/s24134281" },
  { type: "intl", year: 2024, featured: true, authors: "Lee, J.*, Bateni, S. M., Jun, C.*, Heggy, E., Jamei, M., Kim, D., Ghafouri, H. R., & Deenik, J. L.", title: "Hybrid machine learning system based on multivariate data decomposition and feature selection for improved multitemporal evapotranspiration forecasting", venue: "Engineering Applications of Artificial Intelligence, 135, 108744", doi: "10.1016/j.engappai.2024.108744" },
  { type: "intl", year: 2024, authors: "Oh, S., Lee, J.*, Baik, J., Jun, C., & Lee, E. H.*", title: "Morphometric analysis using geographical information system and the relationship with precipitation quantiles of major dam basins in South Korea", venue: "Water, 16(7), 1053", doi: "10.3390/w16071053" },
  { type: "intl", year: 2024, authors: "Lee, J., & Yoo, C.*", title: "Comparing approaches for obtaining downstream hydraulic geometry in two Korean basins: focusing on peak flow velocity", venue: "Journal of Hydrology, 635, 131156", doi: "10.1016/j.jhydrol.2024.131156" },
  { type: "intl", year: 2023, authors: "Lee, J., Moon, G., Lee, J., Jun, C., & Choi, J.*", title: "Evaluation of methods for estimating long-term flow fluctuations using frequency characteristics from wavelet analysis", venue: "Water, 15(16), 2968", doi: "10.3390/w15162968" },
  { type: "intl", year: 2023, authors: "Narimani, R., Jun, C.*, Nezhad, S. M., Bateni, S. M., Lee, J., & Baik, J.", title: "The role of climate conditions and groundwater on baseflow separation in Urmia Lake Basin, Iran", venue: "Journal of Hydrology: Regional Studies, 47, 101383", doi: "10.1016/j.ejrh.2023.101383" },
  { type: "intl", year: 2023, featured: true, authors: "Lee, J., Byun, J., Baik, J., Jun, C., & Kim, H. J.*", title: "Estimation of raindrop size distribution and rain rate with infrared surveillance camera in dark conditions", venue: "Atmospheric Measurement Techniques, 16, 707–725", doi: "10.5194/amt-16-707-2023" },
  { type: "intl", year: 2023, authors: "Lee, J., & Yoo, C.*", title: "Determination of Clark unit hydrograph parameters for estimating probable maximum flood", venue: "Hydrology Research, 54(2), 245–264", doi: "10.2166/nh.2023.120" },
  { type: "intl", year: 2022, authors: "Osmani, S. A., Kim, J. S., Jun, C.*, Sumon, M., Baik, J., & Lee, J.", title: "Prediction of monthly dry days with machine learning algorithms: a case study in Northern Bangladesh", venue: "Scientific Reports, 12(1), 1–21", doi: "10.1038/s41598-022-23436-x" },
  { type: "intl", year: 2022, authors: "Lee, J., & Yoo, C.*", title: "Use of basin outlet velocity to determine the basin concentration time and storage coefficient", venue: "Hydrology Research, 53(10), 1304–1320", doi: "10.2166/nh.2022.066" },
  { type: "intl", year: 2020, authors: "Yoo, C., Shin, H., & Lee, J.*", title: "Evaluation of the storage effect considering possible redevelopment options of the Peace Dam in South Korea", venue: "Water, 12(6), 1674", doi: "10.3390/w12061674" },
  { type: "intl", year: 2019, authors: "Yoo, C., Lee, J.*, Chang, K., & Yang, D.", title: "Sensitivity evaluation of the flash flood warning system introduced to ungauged small mountainous basins in Korea", venue: "Journal of Mountain Science, 16(5), 971–990", doi: "10.1007/s11629-018-4984-4" },
  { type: "intl", year: 2018, authors: "Lee, J., Park, K., & Yoo, C.*", title: "Bias from rainfall spatial distribution in the application of areal reduction factor", venue: "KSCE Journal of Civil Engineering, 22(12), 5229–5241", doi: "10.1007/s12205-017-1773-5" },
  { type: "intl", year: 2017, authors: "Yoo, C.*, Jun, C., & Lee, J.", title: "Storage effect of dam reservoirs: evaluation of three nonlinear reservoir models", venue: "Water Science and Technology: Water Supply, 17(5), 1436–1446", doi: "10.2166/ws.2017.008" },
  { type: "intl", year: 2017, authors: "Yoo, C.*, Lee, J., & Lee, M.", title: "Parameter estimation of the Muskingum channel flood-routing model in ungauged channel reaches", venue: "Journal of Hydrologic Engineering, 22(7), 05017005", doi: "10.1061/(ASCE)HE.1943-5584.0001507", note: "Best Case Study" },
  { type: "intl", year: 2016, authors: "Yoo, C., Lee, J., & Ro, Y.*", title: "Markov chain decomposition of monthly rainfall into daily rainfall: evaluation of climate change impact", venue: "Advances in Meteorology, 2016", doi: "10.1155/2016/7957490" },

  // ===== Korean Journals =====
  { type: "kr", year: 2023, authors: "Cha, H., Lee, J., Jun, C., Byun, J., & Baik, J.*", title: "A comprehensive analysis of temporal characteristics in independent rainstorm events in Seoul: focusing on changes in unit time and secondary peak constant", venue: "Journal of Korea Water Resources Association, 56(11), 785–799", doi: "10.3741/JKWRA.2023.56.11.785" },
  { type: "kr", year: 2023, authors: "Byun, J., Jun, C., Kim, H. J., Lee, J. J., Park, H., & Lee, J.*", title: "Rainfall image DB construction for rainfall intensity estimation from CCTV videos: focusing on experimental data in a climatic environment chamber", venue: "Journal of Korea Water Resources Association, 56(6), 403–417", doi: "10.3741/JKWRA.2023.56.6.403" },
  { type: "kr", year: 2023, authors: "Cha, H., Jun, C., Lee, J., & Baik, J.*", title: "Evaluation of air quality monitoring networks in Korea: focusing on wind direction and speed", venue: "Journal of the Korean Society of Hazard Mitigation, 23(2), 1–13", doi: "10.9798/KOSHAM.2023.23.2.1" },
  { type: "kr", year: 2022, authors: "Lee, J., & Yoo, C.*", title: "Extension methods of non-stationary time series based on wavelet analysis", venue: "Journal of the Korean Society of Hazard Mitigation, 22(6), 41–53", doi: "10.9798/KOSHAM.2022.22.6.41" },
  { type: "kr", year: 2022, authors: "Baik, J., Park, J., Jun, C., & Lee, J.*", title: "Adequacy of the GK-2A AMI land surface temperature product according to geographic factors and compared with other satellite products (MODIS and S-VIRRS)", venue: "Journal of the Korean Society of Hazard Mitigation, 22(3), 15–23", doi: "10.9798/KOSHAM.2022.22.3.15" },
  { type: "kr", year: 2022, authors: "Lee, J., Jun, C., Kim, H. J., Byun, J., & Baik, J.*", title: "Estimation of grid-type precipitation quantile using satellite based re-analysis precipitation data in Korean peninsula", venue: "Journal of Korea Water Resources Association, 55(6), 447–459", doi: "10.3741/JKWRA.2022.55.6.447" },
  { type: "kr", year: 2022, authors: "Lee, J., Byun, J., Hwang, S., Jun, C., & Baik, J.*", title: "Spatiotemporal analysis of variability in domestic PM10 data using grid based spatial interpolation method", venue: "Journal of the Korean Society of Hazard Mitigation, 22(1), 7–19", doi: "10.9798/KOSHAM.2022.22.1.7" },
  { type: "kr", year: 2019, authors: "Lee, J., Lee, H., & Yoo, C.*", title: "Selection of mother wavelet for bivariate wavelet analysis", venue: "Journal of Korea Water Resources Association, 52(11), 905–916", doi: "10.3741/JKWRA.2019.52.11.905" },
  { type: "kr", year: 2019, authors: "Lee, J., & Yoo, C.*", title: "Application of the modified rational formula to time-distributed rainfall events and comparison with the rational formula application", venue: "Journal of the Korean Society of Hazard Mitigation, 19(5), 253–261", doi: "10.9798/KOSHAM.2019.19.5.253" },
  { type: "kr", year: 2019, authors: "Lee, H., Lee, J., & Yoo, C.*", title: "Selecting a mother wavelet for univariate wavelet analysis of time series data", venue: "Journal of Korea Water Resources Association, 52(8), 575–587", doi: "10.3741/JKWRA.2019.52.8.575" },
  { type: "kr", year: 2017, authors: "Song, S., Lee, J., Cho, E., & Yoo, C.*", title: "Comparative evaluation of hydrological cycle in South and North Korea using a land surface model", venue: "Journal of Wetlands Research, 19(1), 16–29", doi: "10.17663/JWR.2017.19.1.016" },
  { type: "kr", year: 2017, authors: "Na, W., Cho, E., Lee, J., & Yoo, C.*", title: "Mean-field-bias correction of the rainfall forecasts using backward storm tracking", venue: "Journal of the Korean Society of Hazard Mitigation, 17(1), 253–263", doi: "10.9798/KOSHAM.2017.17.1.253" },
  { type: "kr", year: 2017, authors: "Ro, Y., Lee, J., Cho, E., & Yoo, C.*", title: "Hydrologic regionalization of basin using multivariate statistical analysis: a case study of Gyeonggi-do 30 districts", venue: "Journal of the Korean Society of Hazard Mitigation, 17(1), 287–300", doi: "10.9798/KOSHAM.2017.17.1.287" },
  { type: "kr", year: 2016, authors: "Cho, E., Lee, J., & Yoo, C.*", title: "Performance evaluation of CMIP5 GCMs using CSEOF analysis", venue: "Journal of the Korean Society of Hazard Mitigation, 16(1), 265–273", doi: "10.9798/KOSHAM.2016.16.1.265" },
  { type: "kr", year: 2015, authors: "Yoo, C., Lee, J.*, Cho, E., Zhu, J. H., & Choi, H.", title: "Evaluation of rain garden for infiltration capability and runoff reduction efficiency", venue: "Journal of Wetlands Research, 17(1), 101–111", doi: "10.17663/JWR.2015.17.1.101" },

  // ===== International Conferences =====
  { type: "conf", year: 2025, authors: "Hwang, S., Ku, S., Lee, J., Byun, J., Sung, J., Cho, M., & Jun, C.", title: "Acoustic-based rainfall observation system for citizen science: leveraging low-cost IoT sensors", venue: "2nd International Sociohydrology Conference, Tokyo, Japan" },
  { type: "conf", year: 2025, authors: "Cha, H., Baik, J., Lee, J., Na, W., & Jun, C.", title: "Development of rainfall scenario with transition probability reflecting on temporal distribution of heavy rainstorm events", venue: "EGU General Assembly 2025, Vienna, Austria" },
  { type: "conf", year: 2024, authors: "Cha, H., Baik, J., Lee, J., Na, W., & Jun, C.", title: "Development of rainfall generator with transition probability focusing on temporal distribution of heavy rainstorm events", venue: "10th International Conference on Water Resource and Environment, Hong Kong" },
  { type: "conf", year: 2024, authors: "Lee, J., Janizadeh, S., Bateni, S. M., Melancon, A., & Molthan, A.", title: "Flood detection by using PolSAR decompositions and the deep residual U-Net approach to enhance food security", venue: "79th SWCS International Annual Conference, South Carolina, USA" },
  { type: "conf", year: 2024, authors: "Hwang, S., Lee, J., Byun, J., Park, K., & Jun, C.", title: "Rainfall intensity estimation based on raindrops sound: leveraging the convolutional neural network for analyzing spectrogram", venue: "EGU General Assembly 2024, Vienna, Austria" },
  { type: "conf", year: 2024, authors: "Cha, H., Baik, J., Kim, H.-J., Lee, J., Byun, J., & Jun, C.", title: "Unveiling the geodetic distribution of temporal characteristics in rainstorm events across Republic of Korea", venue: "EGU General Assembly 2024, Vienna, Austria" },
  { type: "conf", year: 2023, authors: "Khoshkam, H., Valipour, M., Bateni, S. M., Jun, C., Kim, D., Lee, J., Ameri, R., & Band, S. S.", title: "Forecasting rainfall in different climates across the Contiguous United States using a hybrid deep learning model", venue: "AGU Fall Meeting 2023, San Francisco, CA, USA" },
  { type: "conf", year: 2023, authors: "Cha, H., Baik, J., Lee, J., Byun, J., & Jun, C.", title: "Unveiling spatiotemporal similarities in rainstorm patterns across Seoul, Republic of Korea", venue: "AGU Fall Meeting 2023, San Francisco, CA, USA" },
  { type: "conf", year: 2023, authors: "Cha, H., Baik, J., Lee, J., Byun, J., & Jun, C.", title: "Unveiling temporal changes in peak rainfall patterns: a focus on the secondary peak constant at Seoul", venue: "MedGU Annual Meeting 2023, Marrakech, Morocco" },
  { type: "conf", year: 2023, authors: "Lee, J., Sayed, M. B., Jun, C., Heggy, E., Jamei, M., Kim, D., & Ghafouri, H. R.", title: "Daily reference evapotranspiration forecasting via novel hybrid machine learning methods to conserve agricultural water resources", venue: "International Conference on Digitalization and AI in Agricultural Management, Stockholm, Sweden" },
  { type: "conf", year: 2023, authors: "Osmani, S. A., Narimani, R., Baik, J., Lee, J., & Jun, C.", title: "Coupling machine learning algorithms with the tunable Q-factor wavelet transform in forecasting the SPEI at the Bogra Station in Bangladesh", venue: "12th World Congress of the EWRA, Thessaloniki, Greece" },
  { type: "conf", year: 2023, authors: "Hwang, S., Lee, J., Sung, J., Kim, H., Kim, B., & Jun, C.", title: "Precipitation measurement from raindrops' sound and touch signals", venue: "EGU General Assembly 2023, Vienna, Austria" },
  { type: "conf", year: 2023, authors: "Byun, J., Lee, J., Kim, H.-J., & Jun, C.", title: "Real-time rainfall estimation using binarized rain streak images in surveillance cameras", venue: "EGU General Assembly 2023, Vienna, Austria" },
  { type: "conf", year: 2022, authors: "Cha, H., Baik, J., Kim, H., Lee, J., Byun, J., Park, K., Sung, J., Hwang, S., & Jun, C.", title: "An investigation on the relationship between integrated water vapor and standardized precipitation index: a case study of the Northern Part of Africa", venue: "MedGU Annual Meeting 2022, Marrakech, Morocco" },
  { type: "conf", year: 2022, authors: "Lee, J., Hwang, S., Baik, J., Kim, H.-J., & Jun, C.", title: "A rhapsody in the rain: sound, drop size distribution, and rain rate", venue: "AGU Fall Meeting 2022, Chicago, IL, USA" },
  { type: "conf", year: 2022, authors: "Kim, H.-J., Baik, J., Cha, H., Lee, J., & Jun, C.", title: "A role of water vapor from the atmospheric river on precipitation development", venue: "AGU Fall Meeting 2022, Chicago, IL, USA" },
  { type: "conf", year: 2022, authors: "Lee, J., Yoo, C., & Jun, C.", title: "Investigating the relationship between flow fluctuation and basin characteristics of the dam basins", venue: "Structures 22, Seoul, Korea" },
  { type: "conf", year: 2022, authors: "Nezhad, S., Jun, C., Narimani, R., Byun, J., Baik, J., & Lee, J.", title: "Investigating roles of baseflow on water level in Lake Urmia, Iran", venue: "EGU General Assembly 2022, Vienna, Austria" },
  { type: "conf", year: 2022, authors: "Lee, J., Baik, J., Byun, J., Park, K., & Jun, C.", title: "Assessment of probability precipitation using high resolution precipitation dataset in Korean Peninsula", venue: "IWA Water Safety Conference 2022, Narvik, Norway" },
  { type: "conf", year: 2018, authors: "Lee, J., Yoo, C., & Tung, Y.", title: "Evaluation of rain garden for infiltration capability and runoff reduction", venue: "4th International Conference on Water Resource and Environment (WRE2018), Kaohsiung, Taiwan" },
  { type: "conf", year: 2017, authors: "Lee, J., Cho, E., & Yoo, C.", title: "Consideration of storm shape in the application of areal reduction factor", venue: "22nd International Congress on Modelling and Simulation (MODSIM2017), Tasmania, Australia" },
  { type: "conf", year: 2017, authors: "Cho, E., Song, S., & Lee, J.", title: "Analysis and evaluation of soil moisture data simulated by the VIC model: application to the Korean Peninsula", venue: "AOGS 14th Annual Meeting, Singapore" },
  { type: "conf", year: 2016, authors: "Cho, E., Lee, J., Song, S., Lee, M., Na, W., & Lee, Y.", title: "Uncertainty analysis of CMIP5 general circulation models using cyclostationary empirical orthogonal function", venue: "AOGS 13th Annual Meeting, Beijing, China" },
  { type: "conf", year: 2015, authors: "Lee, J., Cho, E., Lee, M., & Zhu, J.", title: "Evaluation of rain garden for infiltration capability and runoff reduction efficiency", venue: "AOGS 12th Annual Meeting & APHW 7th Conference, Singapore" },
  { type: "conf", year: 2015, authors: "Cho, E., Lee, J., & Song, S.", title: "Applicability evaluation of bivariate frequency analysis using copula", venue: "AOGS 12th Annual Meeting & APHW 7th Conference, Singapore" },
  { type: "conf", year: 2014, authors: "Jun, C., Zhu, J. H., Lee, J., Cho, E., & Yoo, C.", title: "Comparison of storage effect in South and North Han River basin in Korea with concept of storage coefficient", venue: "AOGS 11th Annual Meeting, Sapporo, Japan" },

  // ===== Patents (Registered) =====
  { type: "patent", year: 2026, authors: "Jun, C., Kim, H., Lee, J., & Byun, J.", title: "System and method for distinguishing rainfall and snowfall using CCTV images", venue: "Korean Patent No. 10-2989545" },
  { type: "patent", year: 2025, authors: "Jun, C., Byun, J., Lee, J., & Kim, H.", title: "System and method for generating a rain-streak dataset based on real-environment rainfall images", venue: "Korean Patent No. 10-2856324" },
  { type: "patent", year: 2025, authors: "Jun, C., Cha, H., Lee, J., Baik, J., & Byun, J.", title: "System and method for constructing rainfall scenarios considering the temporal distribution characteristics of actual heavy rainfall events", venue: "Korean Patent No. 10-2856315" },
  { type: "patent", year: 2025, authors: "Jun, C., Baik, J., Lee, J., Byun, J., Hwang, S., & Sung, J.", title: "Method for providing rainfall information using a moving unit equipped with a vibration sensor", venue: "Korean Patent No. 10-2750951" },
  { type: "patent", year: 2024, authors: "Jun, C., Baik, J., Lee, J., Byun, J., Hwang, S., & Sung, J.", title: "System and method for classifying real-time rainfall intensity based on rainfall acoustic frequency analysis", venue: "Korean Patent No. 10-2692441" }
];

/* =========================================================
   Links page (links.html)
   - group > sections > items { name, url, icon, desc }
   - 새 링크는 해당 섹션의 items에 한 줄 추가하면 됩니다.
   - icon: 그 사이트 아이콘 이미지 주소 (생략하면 이름 첫 글자가 표시됨)
   ========================================================= */
const GOV = "https://www.hrfco.go.kr/images/favicon.ico";   // Korean government emblem
const KMA = "https://www.weather.go.kr/w/logo_mark.png";      // Korea Meteorological Administration
const HNU = "https://gra.hannam.ac.kr/wp-content/uploads/2020/07/cropped-icon-180x180.png"; // Hannam University emblem
window.LINKS = [
  {
    group: "Water Resources", groupKo: "수자원",
    sections: [
      { title: "Korea · Water Data & Flood Forecasting", titleKo: "국내 · 수자원 데이터와 홍수 예보", items: [
        { name: "WAMIS", nameKo: "국가수자원관리종합정보시스템 (WAMIS)", url: "https://www.wamis.go.kr", icon: GOV, desc: "National water resources information system — stage, rainfall, dams", descKo: "수위, 강우, 댐 등 국가 수자원 정보" },
        { name: "Han River Flood Control Office", nameKo: "한강홍수통제소", url: "https://www.hrfco.go.kr", icon: GOV, desc: "Real-time flood forecasts and hydrological data", descKo: "실시간 홍수예보와 수문 자료" },
        { name: "Geum River Flood Control Office", nameKo: "금강홍수통제소", url: "https://www.geumriver.go.kr", icon: GOV, desc: "Flood forecasting for the Geum River basin (Daejeon)", descKo: "금강 유역 홍수예보 (대전)" },
        { name: "Nakdong River Flood Control Office", nameKo: "낙동강홍수통제소", url: "https://www.nakdongriver.go.kr", icon: GOV, desc: "Flood forecasting for the Nakdong River basin", descKo: "낙동강 유역 홍수예보" },
        { name: "Yeongsan River Flood Control Office", nameKo: "영산강홍수통제소", url: "https://www.yeongsanriver.go.kr", icon: "https://www.yeongsanriver.go.kr/_KOR/img/favicon.ico", desc: "Flood forecasting for the Yeongsan & Seomjin basins", descKo: "영산강·섬진강 유역 홍수예보" },
        { name: "Flood Risk Map Information System", nameKo: "홍수위험지도 정보시스템", url: "https://www.floodmap.go.kr", icon: "https://www.floodmap.go.kr/img/favicon_180.png", desc: "National flood inundation risk maps", descKo: "전국 홍수 범람 위험지도" },
        { name: "Korea Institute of Hydrological Survey", nameKo: "한국수자원조사기술원", url: "https://www.kihs.re.kr", icon: "https://www.kihs.re.kr/resources/img/reset/favicon.png", desc: "National hydrological surveys and discharge data", descKo: "국가 수문조사와 유량 자료" },
        { name: "My Water", nameKo: "물정보포털 (My Water)", url: "https://www.water.or.kr", icon: "https://www.water.or.kr/site/kor/pbs/images/common/favicon_apple-icon.png", desc: "Integrated water information portal", descKo: "통합 물 정보 포털" },
        { name: "Water Environment Information System", nameKo: "물환경정보시스템", url: "https://water.nier.go.kr", icon: GOV, desc: "Water quality monitoring data (NIER)", descKo: "수질 측정 자료 (국립환경과학원)" },
        { name: "National Drought Information Portal", nameKo: "국가가뭄정보포털", url: "https://www.drought.go.kr", icon: "https://www.drought.go.kr/favicon.ico", desc: "Drought monitoring and outlooks", descKo: "가뭄 감시와 전망" }
      ]},
      { title: "Korea · Weather & Climate", titleKo: "국내 · 기상과 기후", items: [
        { name: "KMA Weather Nuri", nameKo: "기상청 날씨누리", url: "https://www.weather.go.kr/w/index.do", icon: KMA, desc: "Korea Meteorological Administration forecasts and observations", descKo: "기상청 예보와 관측 정보" },
        { name: "KMA Open MET Data Portal", nameKo: "기상자료개방포털", url: "https://data.kma.go.kr", icon: "https://data.kma.go.kr/favicon.ico", desc: "Historical meteorological data downloads", descKo: "과거 기상 자료 내려받기" },
        { name: "KMA API Hub", nameKo: "기상청 API허브", url: "https://apihub.kma.go.kr", icon: KMA, desc: "Programmatic access to KMA data", descKo: "기상청 자료를 API로 이용" },
        { name: "National Meteorological Satellite Center", nameKo: "국가기상위성센터", url: "https://nmsc.kma.go.kr", icon: KMA, desc: "GK-2A satellite imagery and products", descKo: "천리안위성 2A호 영상과 산출물" }
      ]},
      { title: "Korea · Agencies & Institutes", titleKo: "국내 · 정부·공공기관", items: [
        { name: "Ministry of Climate, Energy and Environment", nameKo: "기후에너지환경부", url: "https://www.mcee.go.kr", icon: GOV, desc: "National climate, environment, and water policy", descKo: "기후·환경·물 정책" },
        { name: "K-water", url: "https://www.kwater.or.kr", icon: "https://www.kwater.or.kr/web/images/comm/iphone_favicon.png", desc: "Korea Water Resources Corporation", descKo: "한국수자원공사" },
        { name: "KICT", nameKo: "한국건설기술연구원 (KICT)", url: "https://www.kict.re.kr", desc: "Korea Institute of Civil Engineering and Building Technology", descKo: "건설·수자원 분야 정부출연연구기관" },
        { name: "Public Data Portal", nameKo: "공공데이터포털", url: "https://www.data.go.kr", icon: "https://www.data.go.kr/common/img/favicon/favicon_192.png", desc: "Korean government open data and APIs", descKo: "정부 공공데이터와 오픈 API" },
        { name: "Disaster & Safety Data Platform", nameKo: "재난안전데이터공유플랫폼", url: "https://www.safetydata.go.kr", icon: "https://www.safetydata.go.kr/img/favicon.ico", desc: "Open disaster and safety data from the Ministry of the Interior and Safety", descKo: "행정안전부의 재난·안전 공공데이터" }
      ]},
      { title: "Global Data & Remote Sensing", titleKo: "해외 데이터와 원격탐사", items: [
        { name: "NASA Earthdata", url: "https://www.earthdata.nasa.gov", icon: "https://www.earthdata.nasa.gov/themes/custom/project/hds_earthdata/favicon.ico", desc: "Gateway to NASA Earth observation data", descKo: "NASA 지구관측 자료 통합 포털" },
        { name: "NASA GPM", url: "https://gpm.nasa.gov", icon: "https://gpm.nasa.gov/themes/custom/pmm_bs/favicon.ico", desc: "Global satellite precipitation (IMERG)", descKo: "전지구 위성 강수 자료 (IMERG)" },
        { name: "Copernicus Climate Data Store", url: "https://cds.climate.copernicus.eu", icon: "https://cds.climate.copernicus.eu/_next/static/media/favicon.fa94f50f.ico", desc: "ERA5 reanalysis and climate datasets", descKo: "ERA5 재분석 자료와 기후 데이터" },
        { name: "Copernicus Browser", url: "https://browser.dataspace.copernicus.eu", icon: "https://browser.dataspace.copernicus.eu/apple-touch-icon.png", desc: "Browse and download Sentinel imagery", descKo: "Sentinel 위성영상 조회와 다운로드" },
        { name: "USGS EarthExplorer", url: "https://earthexplorer.usgs.gov", icon: "https://ims.cr.usgs.gov/lib/web/explorer_favicon.ico", desc: "Landsat and other satellite imagery", descKo: "Landsat 등 위성영상 검색과 다운로드" },
        { name: "Google Earth Engine", url: "https://earthengine.google.com", icon: "https://earthengine.google.com/static/images/earth_engine_icon.png", desc: "Cloud platform for geospatial analysis", descKo: "클라우드 기반 공간분석 플랫폼" },
        { name: "NOAA NCEI", url: "https://www.ncei.noaa.gov", icon: "https://www.ncei.noaa.gov/themes/custom/ncei/favicon.ico", desc: "Global climate and weather archives", descKo: "전지구 기후·기상 자료 보관소" },
        { name: "GloFAS", url: "https://global-flood.emergency.copernicus.eu", icon: "https://www.google.com/s2/favicons?domain=global-flood.emergency.copernicus.eu&sz=64", desc: "Copernicus Global Flood Awareness System", descKo: "코페르니쿠스 전지구 홍수 인지 시스템" },
        { name: "GRDC", url: "https://grdc.bafg.de", icon: "https://grdc.bafg.de/images/logos/GRDC4C_Neu_100.svg", desc: "Global Runoff Data Centre — river discharge", descKo: "전지구 하천 유량 자료 센터" },
        { name: "HydroSHEDS", url: "https://www.hydrosheds.org", icon: "https://cdn.prod.website-files.com/602eb43d42a3b5553a4f134c/6244be3431f13d6742fc25a5_Favicon-256.png", desc: "Global river networks and watersheds", descKo: "전지구 하천망과 유역 자료" },
        { name: "CHIRPS", url: "https://www.chc.ucsb.edu/data/chirps", icon: "https://www.chc.ucsb.edu/sites/default/themes/at_lsit/images/department/ucsb_favicon.ico", desc: "Quasi-global gauge–satellite rainfall dataset", descKo: "관측소와 위성을 결합한 준전지구 강우 자료" }
      ]},
      { title: "International Organizations", titleKo: "국제기구", items: [
        { name: "WMO", url: "https://wmo.int", icon: "https://wmo.int/themes/custom/server_theme/dist/images/favicons/apple-touch-icon.png", desc: "World Meteorological Organization", descKo: "세계기상기구" },
        { name: "UNESCO IHP", url: "https://www.unesco.org/en/ihp", icon: "https://www.unesco.org/themes/custom/bunesco8/icon.svg", desc: "Intergovernmental Hydrological Programme", descKo: "유네스코 정부간 수문프로그램" },
        { name: "USGS Water Resources", url: "https://www.usgs.gov/mission-areas/water-resources", icon: "https://www.usgs.gov/themes/custom/usgs_tantalum/favicon.ico", desc: "U.S. water science and data", descKo: "미국 지질조사국의 수자원 과학과 자료" },
        { name: "CUAHSI", url: "https://www.cuahsi.org", icon: "https://www.cuahsi.org/images/favicon.png", desc: "Hydrologic science consortium and data services", descKo: "미국 수문과학 컨소시엄과 자료 서비스" }
      ]},
      { title: "Academic Societies", titleKo: "학회", items: [
        { name: "Korea Water Resources Association", nameKo: "한국수자원학회", url: "https://www.kwra.or.kr", icon: "https://www.kwra.or.kr/media/site_settings/admin_login_logo/favicon.png", desc: "KWRA", descKo: "KWRA" },
        { name: "Korean Society of Civil Engineers", nameKo: "대한토목학회", url: "https://www.ksce.or.kr", icon: "https://www.ksce.or.kr/images/favicon.ico", desc: "KSCE", descKo: "KSCE" },
        { name: "Korean Society of Hazard Mitigation", nameKo: "한국방재학회", url: "https://www.kosham.or.kr", icon: "https://www.kosham.or.kr/custom/104/images/favicon.png", desc: "KOSHAM", descKo: "KOSHAM" },
        { name: "Korean Society of Remote Sensing", nameKo: "대한원격탐사학회", url: "https://www.ksrs.or.kr", icon: "https://www.ksrs.or.kr/favicon.ico", desc: "KSRS", descKo: "KSRS" },
        { name: "GeoAI Data Society", url: "https://www.gaidas.org", icon: "https://www.gaidas.org/image/icon/favicon.ico", desc: "GAIDAS · publisher of GEO DATA", descKo: "GAIDAS · GEO DATA 학술지 발행" },
        { name: "Korean Wetlands Society", nameKo: "한국습지학회", url: "https://www.kwetland.or.kr", icon: "https://www.kwetland.or.kr/images/common/favicon.png", desc: "Journal of Wetlands Research", descKo: "한국습지학회지 발행" }
      ]}
    ]
  },
  {
    group: "Hannam University", groupKo: "한남대학교",
    sections: [
      { title: "Quick Access", titleKo: "바로가기", items: [
        { name: "MY-PORTAL", nameKo: "MY-PORTAL (학교 포털)", url: "https://my.hnu.kr", icon: HNU, desc: "Student & faculty portal (login)", descKo: "학생·교직원 포털 (로그인)" },
        { name: "Groupware", nameKo: "그룹웨어", url: "https://we.hnu.kr", icon: "https://we.hnu.kr/favicon.png", desc: "Faculty & staff groupware (login)", descKo: "교직원 그룹웨어 (로그인)" },
        { name: "HI-CLASS", url: "https://hiclass.hannam.ac.kr", icon: "https://hiclass.hannam.ac.kr/learningx/images/main/favicon.ico", desc: "E-learning system (login)", descKo: "이러닝 시스템 (로그인)" },
        { name: "Industry-Academic Cooperation Foundation", nameKo: "산학협력단", url: "https://sanhak.hannam.ac.kr", icon: "https://sanhak.hannam.ac.kr/static_root/images/common/favicon.png", desc: "Research and industry cooperation", descKo: "연구 및 산학협력 지원" },
        // App link: Google Play by default, App Store on iPhone/iPad (urlIOS)
        { name: "Hey Young Campus", nameKo: "헤이영 캠퍼스", url: "https://play.google.com/store/apps/details?id=com.shinhan.heyoung", urlIOS: "https://apps.apple.com/kr/app/id1605688685",
          icon: "https://play-lh.googleusercontent.com/0ZVxpJR_hft8D5UE9gGNsG1q3UyBcaHMRDwatcY7OdAeE999ICcXdhoHa0SBysOdjH4nsQJPpw6O8qzeveHf3Q=s128", desc: "Mobile student ID & campus app (Shinhan Bank)", descKo: "모바일 학생증·캠퍼스 앱 (신한은행)" }
      ]},
      { title: "University & Department", titleKo: "대학 및 학과", items: [
        { name: "Hannam University", nameKo: "한남대학교", url: "https://www.hnu.kr", icon: HNU, desc: "University homepage (Korean)", descKo: "대학 홈페이지" },
        { name: "Hannam University (English)", nameKo: "한남대학교 (영문)", url: "https://int.hnu.kr/eng/", icon: HNU, desc: "English homepage", descKo: "영문 홈페이지" },
        { name: "College of Engineering", nameKo: "공과대학", url: "https://eng.hannam.ac.kr", icon: "https://eng.hannam.ac.kr/wp-content/uploads/2020/07/cropped-icon-180x180.png", desc: "College homepage", descKo: "단과대학 홈페이지" },
        { name: "Dept. of Civil & Environmental Engineering", nameKo: "건설환경공학과", url: "https://civil.hannam.ac.kr", icon: "https://i0.wp.com/civil.hannam.ac.kr/wp-content/uploads/2020/07/cropped-icon.png?fit=180%2C180&ssl=1", desc: "Department homepage", descKo: "학과 홈페이지" },
        { name: "Graduate School", nameKo: "대학원", url: "https://gra.hannam.ac.kr", icon: HNU, desc: "Graduate programs and admissions", descKo: "대학원 과정과 입학 안내" },
        { name: "Admissions", nameKo: "입학처", url: "https://ibsi.hannam.ac.kr", icon: "https://ibsi.hannam.ac.kr/adms5/images/renew_2022/favicon-96x96.png", desc: "Undergraduate admissions", descKo: "학부 입학 안내" }
      ]},
      { title: "Campus Services", titleKo: "캠퍼스 서비스", items: [
        { name: "Central Library", nameKo: "중앙도서관", url: "https://hanul.hannam.ac.kr", icon: "https://hanul.hannam.ac.kr/image/apple-touch-icon.png", desc: "Books, journals, and databases", descKo: "도서, 학술지, 데이터베이스" },
        { name: "HI-STORY", url: "https://hi.hannam.ac.kr", icon: "https://hi.hannam.ac.kr/static_root/images/common/favicon.png", desc: "Extracurricular & career programs (login)", descKo: "비교과·진로 프로그램 (로그인)" },
        { name: "Academic Calendar", nameKo: "학사일정", url: "https://www.hnu.kr/kor/guide/guide_01_1.html", icon: HNU, desc: "Semester schedule", descKo: "학기별 학사 일정" },
        { name: "Academic Notices", nameKo: "학사공지", url: "https://www.hnu.kr/kor/guide/guide_02.html", icon: HNU, desc: "Academic announcements", descKo: "학사 공지사항" },
        { name: "Center for Teaching & Learning", nameKo: "교수학습개발센터", url: "https://ctl.hannam.ac.kr", icon: HNU, desc: "Teaching and learning support", descKo: "교수·학습 지원" },
        { name: "Career Center", nameKo: "취업·진로 지원", url: "https://job.hnu.kr", icon: HNU, desc: "Jobs and career support", descKo: "채용 정보와 진로 지원" },
        { name: "Dormitory", nameKo: "생활관", url: "https://dormi.hannam.ac.kr", icon: HNU, desc: "Student housing", descKo: "학생 기숙사" }
      ]},
      { title: "Visiting Campus", titleKo: "캠퍼스 방문", items: [
        { name: "Directions", nameKo: "오시는 길", url: "https://www.hnu.kr/kor/about/about_11_1.html", icon: HNU, desc: "How to get to Hannam University", descKo: "한남대학교 찾아오는 길" },
        { name: "Campus Map", nameKo: "캠퍼스 맵", url: "https://www.hannam.ac.kr/data/building.html", icon: HNU, desc: "Buildings on campus", descKo: "캠퍼스 건물 안내" },
        { name: "Commuter Bus", nameKo: "통학버스", url: "https://www.hnu.kr/kor/about/about_11_2.html", icon: HNU, desc: "Shuttle and commuter bus routes", descKo: "셔틀·통학버스 노선" },
        { name: "Campus Phone Directory", nameKo: "교내 전화번호", url: "https://www.hnu.kr/kor/about/about_07_2.html", icon: HNU, desc: "Department and office phone numbers", descKo: "부서별 전화번호 안내" }
      ]}
    ]
  }
];
