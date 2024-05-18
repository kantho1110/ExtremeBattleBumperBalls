<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.2" tiledversion="1.2.4" name="collision" tilewidth="8" tileheight="8" tilecount="18" columns="6">
 <image source="../tiles/collision.png" width="48" height="24"/>
 <tile id="1">
  <properties>
   <property name="nez:isOneWayPlatform" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="2">
  <properties>
   <property name="nez:isSlope" type="bool" value="true"/>
   <property name="nez:slopeTopLeft" type="int" value="0"/>
   <property name="nez:slopeTopRight" type="int" value="7"/>
  </properties>
 </tile>
 <tile id="3">
  <properties>
   <property name="nez:isSlope" type="bool" value="true"/>
   <property name="nez:slopeTopLeft" type="int" value="0"/>
   <property name="nez:slopeTopRight" type="int" value="4"/>
  </properties>
 </tile>
 <tile id="4">
  <properties>
   <property name="nez:isSlope" type="bool" value="true"/>
   <property name="nez:slopeTopLeft" type="int" value="4"/>
   <property name="nez:slopeTopRight" type="int" value="7"/>
  </properties>
 </tile>
 <tile id="7">
  <properties>
   <property name="nez:isSlope" type="bool" value="true"/>
   <property name="nez:slopeTopLeft" type="int" value="0"/>
   <property name="nez:slopeTopRight" type="int" value="7"/>
  </properties>
 </tile>
</tileset>
