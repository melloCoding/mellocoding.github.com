<template>
  <div>
    <h1 class="text-5xl font-bold text-center mb-10">
      First Documented Build Log For the Into the Deep Season
    </h1>
    <div class=":sm:px-10 lg:px-44 mb-10">
      <p class="text-xl">
        This is the first actually log for our team's season. I'm a bit late to
        this because i've been busy coding the rest of the website. So at the
        momment we have a mostly functional robot. In the robots curent state it
        can drive around and strafe. The robot is also capable of almost hanging
        itself on the low bar of the truss. We have attached a linear slider to
        the robot aswell to hopefully allow us to score once we have a working
        claw. This week we did quite a bit. We revised our method for attaching
        the linear actuator. The old design allowed the actuator to move around
        too much. We made a new truss type structure to support the actuator.
        This works however the slider still does not go in far enough and one
        wheel still barely touches the floor. Ignoring that rather large issue
        we decided to work on attaching our main linear slider to allow us to
        actually score. Some lost brain cells later the linear slider is on the
        robot. I quickly coded the arm to work with just the joystick on
        gamepad2. I will later code the robot to allow us to move the arm to a
        specific position using the encoders built into the motors. I later
        attached the motor that has the spool of string for the linear slider.
        We also later realized that to pass inspection we'll have to remove a
        segment from our linear slider. That was the end of the week and we'll
        have to pick up next week.
      </p>
      <div class="object-center">
        <img
          class="w-[50%] rounded-2xl"
          src="/imgs/robotics/robotonfeildone.jpeg"
          alt="aformentioned robot on the field"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Robotics Week One Log",
});
</script>
