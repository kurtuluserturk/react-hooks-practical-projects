import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const [questions] = useState(data)
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {
            /*
            Aşağıda döndüğümüz SingleQuestion yani her bir soru componenti için
            array deki her objenin property lerini spread ile aldık propolarak gönderdik.
            */
            questions.map(question => {
              return <SingleQuestion key={question.id} {...question} /> // Her bir question'ın yani objenin özelliklerine spread ile ulaşıp onları prop yaptık
            })
          }
        </section>
      </div>
    </main>
  );
}

export default App;
