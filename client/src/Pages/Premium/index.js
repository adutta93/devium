import React from 'react';
import Button from '../../Components/Button';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './index.style';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Starter Pack</PricingCardPlan>
                <PricingCardCost>₹100</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 posts daily</PricingCardFeature>
                  <PricingCardFeature>Unlimited content</PricingCardFeature>
                  <PricingCardFeature>Unlimited course pdf</PricingCardFeature>
                </PricingCardFeatures>
                <Button value='Choose plan'/>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Gold Rush</PricingCardPlan>
                <PricingCardCost>₹500</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Unlimited posts</PricingCardFeature>
                  <PricingCardFeature>Unlimited content</PricingCardFeature>
                  <PricingCardFeature>2 Course access / month</PricingCardFeature>
                </PricingCardFeatures>
                <Button value='Choose plan'/>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Diamond Kings</PricingCardPlan>
                <PricingCardCost>₹1000</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Unlimited Posts</PricingCardFeature>
                  <PricingCardFeature>Unlimited Content</PricingCardFeature>
                  <PricingCardFeature>5 courses access / month</PricingCardFeature>
                </PricingCardFeatures>
                <Button value='Choose plan'/>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;