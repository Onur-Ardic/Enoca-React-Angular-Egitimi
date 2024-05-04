import Accordion from 'react-bootstrap/Accordion'
const About = () => {
  return (
    <div>
      <section className="aboutus mt-60">
        <h2 className="text-center font-mono mb-5">Onur Ardıç</h2>
        <div className="container">
          <div className="about-wrapper row justify-content-center">
            <div className="about-left col-md-5">
              <div className="img">
                <img
                  src="https://private-user-images.githubusercontent.com/121682309/277368248-59f13527-ff93-4d96-9b30-8ef8cbb8ca54.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQ2NjMwNDEsIm5iZiI6MTcxNDY2Mjc0MSwicGF0aCI6Ii8xMjE2ODIzMDkvMjc3MzY4MjQ4LTU5ZjEzNTI3LWZmOTMtNGQ5Ni05YjMwLThlZjhjYmI4Y2E1NC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTAyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUwMlQxNTEyMjFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05MmZiOGJjYTkwYWRmMzEwMzdiNjU5NWI1NzU5ZjYzMTlmYmVlZjI2YmYwOGUwYTFlNGRhNDBiYTBkODMwOTA0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.wa-Di_1TIVteJfXEgClalel6OH0GIfIQPGfQn3CGdjQ"
                  alt="onurardic"
                  className="img-fluid"
                />
              </div>

              <div className="social mt-2 text-center">
                <a href="https://github.com/onur-ardic" target="_blank">
                  <i className="fab fa-github fs-1 text-black"></i>
                </a>
                <a href="https://www.linkedin.com/in/onurardic/" target="_blank">
                  <i className="fab fa-linkedin fs-1 text-black"></i>
                </a>
              </div>
            </div>

            <div className="about-right col-md-5">
              <div className="accordion" id="accordionExample">
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header> Onur Ardıç Kimdir</Accordion.Header>
                    <Accordion.Body>
                      Merhaba, ben Atatürk Üniversitesi Yönetim Bilişim Sistemleri 4. sınıf
                      öğrencisiyim. Bilgisayarla tanışmam 7 yaşında başladı ve o günden beri
                      teknolojiye olan merakım hiç azalmadı.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header> Hangi Teknolojileri Kullanıyorum</Accordion.Header>
                    <Accordion.Body>
                      Kendi gelişimime her zaman açık bir öğrenci olarak, yeni şeyler öğrenmeyi ve
                      kendimi sürekli olarak geliştirmeyi seven biriyim. Şu anki odaklandığım alan
                      Front End geliştirme ve burada HTML, CSS ve JavaScript konularında sağlam bir
                      bilgiye sahibim. Bu alandaki yeteneklerimi piyasada işlere dönüştürdüm ve
                      referanslarımı oluşturdum. Gelecekteki vizyonum bir şirkette proje yöneticisi
                      olarak görev almak ve yenilikçi yaklaşımlarla projeleri en iyi şekilde
                      gerçekleştirmektir. Bu hedefe ulaşabilmek için sürekli olarak kendimi
                      geliştiriyor ve öğreniyorum.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header> Tecrübelerim ve Yeteneklerim</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        2. sınıftan itibaren teknokent merkezli farklı firmalarda Front End
                        Developer olarak çalıştım
                      </p>

                      <ul>
                        <h5>Kullandığım Teknolojiler</h5>
                        <li>HTML, CSS, JS</li>
                        <li>Bootstrap, Tailwind, SCSS, SASS</li>
                        <li>React</li>
                      </ul>
                      <p>
                        Daha önce gerçekleştirdiğim projeler arasında sosyal medya platformları,
                        tanıtım siteleri ve hazır script tasarımları gibi çeşitli projeler
                        bulunmaktadır. Ayrıca, React, VueJS, Tailwind CSS gibi teknolojilere olan
                        ilgim ve öğrenme isteğim hiç azalmıyor.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
