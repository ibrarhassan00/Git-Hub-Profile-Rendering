import React from 'react';
import { Card ,Flex, Input ,Divider} from 'antd';
const { Meta } = Card;



const AppCard = ({userD}) => (
  
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="Profile Pic" 
    src={userD.avatar_url} />}
  >
    <Meta title={userD.name} description={userD.bio} />
    <div>
      <p>Followers : {userD.followers}</p>
      <a href={userD.html_url} target="_blank">GitHub</a>
    </div>
  </Card>

);
export default AppCard;