import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const checkNumber = (number) => {
    if (number > people.length - 1) {   // Son elemanının index'i arrayin uzunluğunun 1 eksiğidir.
      return 0    // Sona geldiğimiz için ilk elemanı yani sıfırınca elemanı döndürüyoruz
    }
    if (number < 0) {   // Yani negatif olmuşsa
      return people.length - 1  // Burada array in son elemanın döndür diyoruz
    }
    return number
  }

  const nextPerson = () => {
    setIndex(index => {
      let newIndex = index + 1;
      return checkNumber(newIndex)
    })
  }

  const prevPerson = () => {
    setIndex(index => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)  // Random ile 0-1 arasında sayı ürettik floor ile en yakın bir alt sayıya yuvarlattık
    if (randomNumber === index) { // Eğer ürettiğimiz randomNumber zaten index e eşitse
      randomNumber = index + 1    // Aynı şeyi ekranda görmemek için randomNumber a 1 ekledik
    }
    setIndex(checkNumber(randomNumber))
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson} >
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
        <button className="random-btn" onClick={randomPerson} >surprise me</button>
      </div>
    </article>
  );
};

export default Review;
