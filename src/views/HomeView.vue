<script setup lang="ts">
import LogoBanner from '@/components/images/LogoBanner.vue'
import TextWithHeader from '@/components/textbox/TextWithHeader.vue'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import ExampleProfileCard from '@/components/cards/ExampleProfileCard.vue'
import FadedComponent from '@/components/animations/FadedComponent.vue'
import GridGroup from '@/components/groups/GridGroup.vue'
import ActionButton from '@/components/buttons/ActionButton.vue'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import HoverScale from '@/components/animations/HoverScale.vue'
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord'
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle'
import ImageBox from '@/components/images/ImageBox.vue'
import InfoCard from '@/components/textbox/InfoCard.vue'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
import { faSackXmark } from '@fortawesome/free-solid-svg-icons/faSackXmark'
import UserCount from '@/components/textbox/UserCount.vue'
</script>

<template>
  <!-- LOGO BANNER -->
  <div class="logo-container">
    <LogoBanner />
  </div>
  <!-- ACTION BUTTONS -->
  <GridGroup :columns="'1fr 1fr 1fr'" :width="'40%'">
    <FadedComponent :scroll="false"
      ><HoverScale :scalesize="1.02">
        <ActionButton
          :text="'Youtube'"
          :icon="faYoutube"
          :useicon="true"
          :backgroundcolor="'#F2EBFB'"
          :linkto="'https://youtube.com/channel/UCTAoQCdTyJ1W9xleINYJspg'"
          :hovercolor="'#8c2f39'"
          :textcolor="'#b23a48'"
          :btnwidth="'70%'"
          :minbtnwidth="'150px'"
          :target="'_blank'"
        /> </HoverScale
    ></FadedComponent>
    <FadedComponent :scroll="false"
      ><HoverScale :scalesize="1.02">
        <ActionButton
          :text="'GitHub'"
          :icon="faGithub"
          :useicon="true"
          :backgroundcolor="'#F2EBFB'"
          :linkto="'https://github.com/nickdoxa'"
          :hovercolor="'#344e41'"
          :textcolor="'#3a5a40'"
          :btnwidth="'70%'"
          :minbtnwidth="'150px'"
          :target="'_blank'"
        /> </HoverScale
    ></FadedComponent>
    <FadedComponent :scroll="false"
      ><HoverScale :scalesize="1.02">
        <!-- TODO add correct link once server is made -->
        <ActionButton
          :text="'Discord'"
          :icon="faDiscord"
          :useicon="true"
          :backgroundcolor="'#F2EBFB'"
          :linkto="'https://discord.gg/'"
          :hovercolor="'#1b263b'"
          :textcolor="'#415a77'"
          :btnwidth="'70%'"
          :minbtnwidth="'150px'"
          :target="'_blank'"
        /> </HoverScale
    ></FadedComponent>
  </GridGroup>
  <!-- TEXT: HOW DOES IT WORK-->
  <GridGroup :columns="'1fr 1fr'" :width="'70%'">
    <FadedComponent :scroll="false">
      <TextWithHeader
        :title="'How does it work?'"
        :headercolor="'#9F21E3'"
        :text="'Game Nexus is the centralized data center for gamers around the world! After creating an account you can setup your personal profile card! You choose which games, or platforms, you want to link to your Nexus Account, and then you can choose whether or not your card should show up publicly, or privately via custom link! Check out this example profile card...'"
        :textcolor="'#F2EBFB'"
        :useicon="true"
        :icon="faGlobe"
      />
    </FadedComponent>
    <FadedComponent :scroll="false">
      <ExampleProfileCard />
    </FadedComponent>
  </GridGroup>
  <!-- INFO CARDS -->
  <GridGroup :columns="'1fr 1fr 1fr'" :width="'80%'">
    <FadedComponent :scroll="true">
      <HoverScale :scalesize="1.02">
        <InfoCard
          :color="'#FFFFFF'"
          :backgroundcolor="'#3A015C'"
          :useicon="true"
          :icon="faUser"
          :header="'Customize'"
          :text="'Your account. Your way! On Nexus you can choose what kind of profile you show to the other gamers in the world with custom profile pictures, statuses, connections, and more!'"
        />
      </HoverScale>
    </FadedComponent>
    <FadedComponent :scroll="true"
      ><HoverScale :scalesize="1.02">
        <InfoCard
          :color="'#FFFFFF'"
          :backgroundcolor="'#190028'"
          :useicon="true"
          :icon="faSackXmark"
          :header="'Free'"
          :text="'The Nexus directory has been and will always be free! Search for any player or platform for free with no strings attached!'"
        />
      </HoverScale>
    </FadedComponent>
    <FadedComponent :scroll="true"
      ><HoverScale :scalesize="1.02">
        <InfoCard
          :color="'#FFFFFF'"
          :backgroundcolor="'#3A015C'"
          :useicon="true"
          :icon="faLock"
          :header="'Secure'"
          :text="'Your data is always kept safe on Nexus. You choose what data to display publicly or privately before its stored in our secure 0Auth2 encrypted database!'"
        />
      </HoverScale>
    </FadedComponent>
  </GridGroup>
  <!-- USER COUNT -->
  <FadedComponent :scroll="true">
    <UserCount />
  </FadedComponent>
  <!-- TEXT: WHATS THE POINT -->
  <GridGroup :columns="'1fr 1fr'" :width="'70%'">
    <ImageBox :height="'250px'" :width="'auto'" :fadeonscroll="true">
      <img
        src="@/assets/images/connected.png"
        alt="Connected Diagram"
        :style="{ '--img-height': '15rem', '--img-width': 'auto' }"
        class="img-box"
      />
    </ImageBox>
    <FadedComponent :scroll="true">
      <TextWithHeader
        :useicon="true"
        :icon="faQuestionCircle"
        :title="'So what\'s the point...'"
        :headercolor="'#9F21E3'"
        :text="'Game Nexus acts as a directory for players around the world to publicly link their chosen online accounts. Simply put, Nexus allows gamers to find each other anywhere. Say you just finished a match, and you want to find that persons Steam account, if they have a Nexus profile you can find them here! Nexus also lets you know what games or platforms you have in common with a players profile. You can also access someones game related content such as a Youtube channel or Twitch stream!'"
        :textcolor="'#F2EBFB'"
      />
    </FadedComponent>
  </GridGroup>
</template>

<style scoped>
.logo-container {
  margin-top: 6rem;
  margin-bottom: 3rem;
}

@media (max-width: 992px) {
  .logo-container {
    margin-top: 5rem;
  }
}
</style>
