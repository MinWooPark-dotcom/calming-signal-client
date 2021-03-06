import React from 'react';
import NavContainer from '../../../container/NavContainer';
import Sidebar from '../../Sidebar';
import natural_tail from '../../../img/natural_tail.jpeg';
import './NaturalTail.css';

const NaturalTail = () => {
  return (
    <div className="natural_tail_container">
      <NavContainer />
      <Sidebar />
      <div className="natural_tail_contents">
        <div className="natural_tail_contents_left">
          <div className="natural_tail_right_img_box">
            <img
              className="natural_tail_right_img"
              src={natural_tail}
              alt="natural_tail"
            />
          </div>
        </div>
        <div className="natural_tail_contents_right">
          <div className="natural_tail_contents_right_title">
            자연스럽게 내려간 꼬리
          </div>
          <div className="natural_tail_contents_right_first">
            꼬리가 부드럽게 내려가 있다는 것은, 강아지가 아주 편안한<br></br>{' '}
            감정을 느끼는 상태입니다.
          </div>
          <div className="natural_tail_contents_right_second">
            이 때 부드럽게 쓰다듬어 준다면 따듯하고 원만한 소통이<br></br> 될 수
            있습니다.
          </div>
          <div className="natural_tail_contents_right_third">
            그러나 때에 따라가 여유롭게 쉬고 있는 강아지는 귀찮게<br></br> 느낄
            수 있으니 싫어하는 기색이 있다면 스트레스가 <br></br>될 수 있으니
            어느 정도 배려가 필요합니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaturalTail;
