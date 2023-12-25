"use client";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero-section">
        <div className="grid grid-cols-2 w-full mb-4">
          {/* Part Title */}
          <div className="flex w-[50dvw] h-[720px] items-center">
            <div className="flex flex-col w-[510px] pl-[120px] gap-y-4 relative">
              <h1 className="text-[40px] font-lexend font-bold leading-[45px] text-yl-20">
                Bimbel Privat Nomor 1 Di Madiun
              </h1>
              <p className="font-lexend text-[13px] text-yl-40 font-light leading-[23px]">
                Yessles Bimbingan belajar privat berbasi psikologi dan motivasi
                menggunakan metode “Student Centered Learning” dimana pusat
                pembalajaran kami adalah siswa.
              </p>

              {/* Search Bar */}
              <form className="flex mt-4 justify-between outline outline-gray-300 outline-1 rounded-3xl h-[44px] items-center">
                <span className="material-symbols-outlined pl-4 text-yl-30">
                  school
                </span>
                <input
                  type="text"
                  placeholder="Ketik tingkat pendidikan kamu .."
                  className="pl-4 w-full text-sm focus:outline-none text-gray-500 pr-2"
                />
                <button className="h-full w-[150px] bg-yl-10 rounded-3xl text-white flex flex-row items-center justify-center">
                  Cari
                  <span className="material-symbols-outlined">
                    keyboard_arrow_right
                  </span>
                </button>
              </form>

              {/* Lulusan Kami */}
              <div className="flex flex-col mt-8">
                <p className="font-lexend text-yl-40 text-[13px] font-light mb-1">
                  Lulusan Kami
                </p>
                <div className="flex flex-row w-full justify-between">
                  <img src="/ui_logo.png" className="h-[60px] object-cover" />
                  <img src="/pnm_logo.png" className="h-[60px] object-cover" />
                  <img src="/ugm_logo.png" className="h-[60px] object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Background Image */}
          <div className="flex flex-col relative w-[50dvw] h-[720px] items-center justify-center">
            <img
              src="/home_image.png"
              className="w-full h-full absolute -z-10 object-cover rounded-bl-[60px]"
            />

            <div className="absolute bottom-20 right-0 px-4 w-[700px] max-h-24 flex-row flex overflow-x-auto overflow-hidden gap-x-3">
              {/* card home */}
              <div className="flex">
                <div className="flex flex-row items-center h-[80px] w-[282px] rounded-3xl bg-white p-6 gap-x-4">
                  <img
                    src="https://source.unsplash.com/random/900x700/?person-1"
                    className="h-[56px] w-[56px] object-cover rounded-3xl"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-[16px] font-lexend text-yl-20">
                      200+ Active Student
                    </h1>
                    <h1 className="text-[10px] font-lexend text-yl-40">
                      Active Student & Alumni
                    </h1>
                  </div>
                </div>
              </div>
              {/* card home */}
              <div className="flex">
                <div className="flex flex-row items-center h-[80px] w-[262px] rounded-3xl bg-white p-6 gap-x-4">
                  <img
                    src="https://source.unsplash.com/random/900x700/?person-2"
                    className="h-[56px] w-[56px] object-cover rounded-3xl"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-[16px] font-lexend text-yl-20">
                      100+ Yess Tutor
                    </h1>
                    <h1 className="text-[10px] font-lexend text-yl-40">
                      Best partner for Student
                    </h1>
                  </div>
                </div>
              </div>
              {/* card home */}
              <div className="flex">
                <div className="flex flex-row items-center h-[80px] w-[262px] rounded-3xl bg-white p-6 gap-x-4">
                  <img
                    src="https://source.unsplash.com/random/900x700/?person-3"
                    className="h-[56px] w-[56px] object-cover rounded-3xl"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-[16px] font-lexend text-yl-20">
                      100+ Yess Tutor
                    </h1>
                    <h1 className="text-[10px] font-lexend text-yl-40">
                      Best partner for Student
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Yessles */}
      <section id="program-section">
        <div className="flex w-[100dvw] h-[700px] items-center">
          <div className="flex w-full flex-col">
            {/* Header Section Program */}
            <div className="flex flex-row bg-blue-gray-200 h-full w-full justify-between items-center px-[8%]">
              <div className="flex flex-col ">
                <h1 className="text-[12px] text-yl-30">Program Yessles</h1>
                <h1 className="text-[30px] font-bold text-yl-20 font-lexend">
                  Belajar di Yessles
                </h1>
              </div>

              {/* Button Type */}
              <div className="flex flex-row gap-x-4">
                <div className="hover:bg-yl-10/20 hover:text-yl-10 text-yl-70 border-yl-70 border-[1px] hover:border-yl-10/10 transition-all flex justify-center items-center rounded-[20px] px-[15px] py-[8px] flex-row gap-x-1">
                  <span className="material-symbols-outlined">apps</span>
                  Semua
                </div>
                <div className="hover:bg-yl-10/20 hover:text-yl-10 text-yl-70 border-yl-70 border-[1px] hover:border-yl-10/10 transition-all flex justify-center items-center rounded-[20px] px-[15px] py-[8px] flex-row gap-x-1">
                  <span className="material-symbols-outlined">school</span>
                  Program Belajar
                </div>
                <div className="hover:bg-yl-10/20 hover:text-yl-10 text-yl-70 border-yl-70 border-[1px] hover:border-yl-10/10 transition-all flex justify-center items-center rounded-[20px] px-[15px] py-[8px] flex-row gap-x-1">
                  <span className="material-symbols-outlined">package</span>
                  Paket Belajar
                </div>
              </div>

              {/* Button Switch Page */}
              <div className="flex flex-row gap-x-2">
                <div className="hover:bg-yl-10/20 hover:text-yl-10 text-yl-70 border-yl-70 border-[1px] hover:border-yl-10/10 transition-all flex justify-center items-center rounded-full p-3 flex-row gap-x-1">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 15 }}
                  >
                    arrow_back_ios_new
                  </span>
                </div>
                <div className="hover:bg-yl-10/20 rotate-180 hover:text-yl-10 text-yl-70 border-yl-70 border-[1px] hover:border-yl-10/10 transition-all flex justify-center items-center rounded-full p-3 flex-row gap-x-1">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 15 }}
                  >
                    arrow_back_ios_new
                  </span>
                </div>
              </div>
            </div>

            {/* Caraousel */}
            <div className="flex flex-row pl-[8%] w-screen mt-2 overflow-x-auto gap-x-8">
              <div className="overflow-x-auto flex flex-row w-full h-full items-start justify-start py-5 gap-x-5">
                {/* Card Box */}
                <div className="flex h-[478px] w-[320px] flex-col">
                  <div className="flex h-[382px] w-[310px] bg-blue-gray-500 rounded-3xl relative bg-yellow-600">
                    <div className="absolute h-[34px] w-[77px] bg-blue-gray-700 rounded-xl flex items-center justify-center bottom-0 m-6 bg-red-600 gap-x-1 uppercase text-[12px]">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 22 }}
                      >
                        school
                      </span>
                      Paud
                    </div>
                  </div>
                  <div className="flex flex-col mt-2">
                    <h1>Pendidikan Anak Usia Dini</h1>
                    <h1>Mulai dari Rp 5,9jt/tahun</h1>
                  </div>
                </div>
                {/* Card Box */}
                <div className="flex h-[478px] w-[320px] flex-col">
                  <div className="flex h-[382px] w-[310px] bg-blue-gray-500 rounded-3xl relative bg-yellow-600">
                    <div className="absolute h-[34px] w-[77px] bg-blue-gray-700 rounded-xl flex items-center justify-center bottom-0 m-6 bg-red-600 gap-x-1 uppercase text-[12px]">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 22 }}
                      >
                        school
                      </span>
                      Paud
                    </div>
                  </div>
                  <div className="flex flex-col mt-2">
                    <h1>Pendidikan Anak Usia Dini</h1>
                    <h1>Mulai dari Rp 5,9jt/tahun</h1>
                  </div>
                </div>
                {/* Card Box */}
                <div className="flex h-[478px] w-[320px] flex-col">
                  <div className="flex h-[382px] w-[310px] bg-blue-gray-500 rounded-3xl relative bg-yellow-600">
                    <div className="absolute h-[34px] w-[77px] bg-blue-gray-700 rounded-xl flex items-center justify-center bottom-0 m-6 bg-red-600 gap-x-1 uppercase text-[12px]">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 22 }}
                      >
                        school
                      </span>
                      Paud
                    </div>
                  </div>
                  <div className="flex flex-col mt-2">
                    <h1>Pendidikan Anak Usia Dini</h1>
                    <h1>Mulai dari Rp 5,9jt/tahun</h1>
                  </div>
                </div>
                {/* Card Box */}
                <div className="flex h-[478px] w-[320px] flex-col">
                  <div className="flex h-[382px] w-[310px] bg-blue-gray-500 rounded-3xl relative bg-yellow-600">
                    <div className="absolute h-[34px] w-[77px] bg-blue-gray-700 rounded-xl flex items-center justify-center bottom-0 m-6 bg-red-600 gap-x-1 uppercase text-[12px]">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 22 }}
                      >
                        school
                      </span>
                      Paud
                    </div>
                  </div>
                  <div className="flex flex-col mt-2">
                    <h1>Pendidikan Anak Usia Dini</h1>
                    <h1>Mulai dari Rp 5,9jt/tahun</h1>
                  </div>
                </div>
                {/* Card Box */}
                <div className="flex h-[478px] w-[320px] flex-col">
                  <div className="flex h-[382px] w-[310px] bg-blue-gray-500 rounded-3xl relative bg-yellow-600">
                    <div className="absolute h-[34px] w-[77px] bg-blue-gray-700 rounded-xl flex items-center justify-center bottom-0 m-6 bg-red-600 gap-x-1 uppercase text-[12px]">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 22 }}
                      >
                        school
                      </span>
                      Paud
                    </div>
                  </div>
                  <div className="flex flex-col mt-2">
                    <h1>Pendidikan Anak Usia Dini</h1>
                    <h1>Mulai dari Rp 5,9jt/tahun</h1>
                  </div>
                </div>
                {/* Card Box */}
                <div className="flex h-[478px] w-[320px] flex-col">
                  <div className="flex h-[382px] w-[310px] bg-blue-gray-500 rounded-3xl relative bg-yellow-600">
                    <div className="absolute h-[34px] w-[77px] bg-blue-gray-700 rounded-xl flex items-center justify-center bottom-0 m-6 bg-red-600 gap-x-1 uppercase text-[12px]">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 22 }}
                      >
                        school
                      </span>
                      Paud
                    </div>
                  </div>
                  <div className="flex flex-col mt-2">
                    <h1>Pendidikan Anak Usia Dini</h1>
                    <h1>Mulai dari Rp 5,9jt/tahun</h1>
                  </div>
                </div>
                {/* Card Box */}
                <div className="flex h-[478px] w-[320px] flex-col">
                  <div className="flex h-[382px] w-[310px] bg-blue-gray-500 rounded-3xl relative bg-yellow-600">
                    <div className="absolute h-[34px] w-[77px] bg-blue-gray-700 rounded-xl flex items-center justify-center bottom-0 m-6 bg-red-600 gap-x-1 uppercase text-[12px]">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 22 }}
                      >
                        school
                      </span>
                      Paud
                    </div>
                  </div>
                  <div className="flex flex-col mt-2">
                    <h1>Pendidikan Anak Usia Dini</h1>
                    <h1>Mulai dari Rp 5,9jt/tahun</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
