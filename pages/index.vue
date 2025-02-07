<template>
  <div>

    <Loader :isLoading="status === 'pending'"/>

    <div v-if="status === 'success'">
      <Header/>
      <div v-for="(course, id) in data?.data" :key="`single-course-${id}`">
        <div
          class="w-full h-full min-h-[100vh] pt-24"
          :style="{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
        >
          <div class="flex items-center justify-center">
            <img
              src="@/public/main-bg.png"
              alt=""
            />
          </div>

          <div class="container mx-auto">
            <div class="flex items-center justify-center">
              <h1 class="text-lg md:text-7xl font-semibold text-primary-700 text-center">
                {{ course?.title }}
              </h1>
            </div>

            <div class="flex items-center justify-center mt-5 lg:mt-20">
              <h1 class="text-lg md:text-7xl text-center font-semibold text-primary-500">
                {{ course?.name }}
              </h1>
            </div>

            <div class="mt-5 md:mt-20">
              <p class="text-lg lg:text-4xl text-center font-medium">
                কোর্সের সময়সীমা: {{ course?.time }}
              </p>
            </div>

            <div class="py-5 md:py-20 w-full">
              <div class="flex items-center justify-center">
                <p
                  class="text-lg md:text-6xl font-bold text-center text-william-600 border-double border-b-4 border-william-600 w-max"
                >
                  উদ্দেশ্যসমূহ
                </p>
              </div>

              <div class="py-5 md:py-24 flex w-full flex-col md:flex-row items-center justify-between gap-5">
                <div class="w-[80%] md:w-1/2">
                  <img class="drop-shadow-2xl" :src="course?.cover" alt="" />
                </div>
                <div class="w-[80%] md:w-1/2">
                  <div class="mt-10 flex flex-col gap-5">
                    <p
                      v-if="data?.data"
                      v-html="course?.description"
                      class="whitespace-break-spaces leading-loose text-lg md:text-2xl text-william-500 font-medium"
                    ></p>
                    <p v-else>Load in server</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="!isLogin"
          class="relative w-full h-full min-h-screen md:min-h-[800px] before:content-[''] before:w-full before:h-full before:bg-black/70 before:absolute"
          :style="{
            backgroundImage: `url(https://www.detergentsandsoaps.com/images/soap-making.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
        >
          <div class="absolute w-full h-full overflow-hidden">
            <div
              class="container max-w-6xl m-auto flex flex-col md:flex-row items-center justify-between h-full"
            >
              <div class="hidden md:block w-full max-w-[400px] h-auto">
                <img class="w-full h-full" :src="featureImage" alt="" />
              </div>

              <JoinForm />
            </div>
          </div>
        </div>

        <div
          class="w-full h-full min-h-[60vh] py-16 overflow-hidden radialGradientBg grid place-items-center"
        >
          <div class="w-[90%] md:w-[40%] flex items-center flex-col text-center gap-10">
            <p class="text-lg md:text-4xl text-white font-semibold">
              সব থেকে কম মূল্যে সম্পন্ন কোর্স টি এক্সেস পেতে এখনি মজা দিন
            </p>
            <div class="flex gap-3" v-if="course?.old_price">
              <p class="text-lg md:text-3xl text-white font-bold">পূূর্ববর্তী মূল্য</p>
              <s class="text-lg md:text-3xl text-white font-bold">{{
                course?.old_price
              }}</s>
              <p class="text-lg md:text-3xl text-white font-bold">টাকা</p>
            </div>
            <p class="text-lg md:text-7xl text-white font-bold">
              ডিস্কাউন্ট মূল্য <br class="hidden sm:block"/>
              {{ course?.price }} <br class="hidden sm:block" />
              টাকা মাত্র
            </p>

            <div class="w-full h-full">
              <button
                class="bg-black w-full text-center py-3 md:py-5 text-white text-lg lg:text-xl rounded-lg"
              >
                জমা দিন এবং কোর্স দেখুন
              </button>
            </div>
          </div>
        </div>

        <div
          v-if="course?.video"
          class="relative w-full h-full min-h-[100vh] py-16 overflow-hidden grid place-items-center before:content-[''] before:w-full before:h-full before:bg-william-800/70 before:absolute"
          :style="{
            backgroundImage: `url(https://img.freepik.com/free-vector/abstract-background-with-flowing-waves-design_1048-6521.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
        >
          <div class="absolute w-[90%] md:w-[50%] flex items-center flex-col gap-10">
            <div class="bg-william-200 px-7 py-8">
              <p class="text-lg lg:text-3xl text-william-800 text-center font-bold">
                দেখুন আমাদের ভিডিও এই কমপ্লিট কোর্স সম্পর্কে সমস্ত কিছু জানার
                জন্য
              </p>
            </div>
            <iframe
              class="w-full h-full lg:min-h-[50vh]"
              :src="`https://youtube.com/embed/${course?.video}`"
              title="YouTube video player"
            ></iframe>
          </div>
        </div>

        <div class="w-full h-full py-5 lg:py-36">
          <div
            class="container mx-auto flex items-center flex-col justify-center"
          >
            <div>
              <p
                class="text-lg md:text-6xl font-bold text-center text-william-600 border-double border-b-4 border-william-600 w-max"
              >
                সিলেবাস
              </p>
            </div>

            <div
              class="mt-5 md:mt-20 flex items-center flex-col w-full"
              v-for="(chapter, i) in course?.chapters"
              :key="`sopt-${i}`"
            >
              <div class="">
                <div
                  class="font-bold lg:text-6xl text-lg px-10 py-3 lg:px-36 cursor-default lg:py-5 bg-william-500 text-white transition-all ease-in-out duration-100 hover:text-william-600 border-4 hover:border-william-600 rounded-lg hover:bg-transparent"
                >
                  {{ chapter?.chapter_title }}
                </div>
              </div>

              <div
                class="mt-5 md:mt-40 w-full"
                v-for="(chapterItem, i) in chapter?.chapter_items"
                :key="`single-mode-${i}`"
              >
                <div
                  class="flex w-full justify-evenly flex-col
                  lg:flex-row items-center"
                  :class="i % 2 ? 'lg:flex-row-reverse' : ''"
                >
                  <div class="w-[90%] md:w-1/2 mb-3 lg:mb-0">
                    <img :src="course?.cover" alt="" />
                  </div>
                  <div class="w-[90%] md:w-1/2">
                    <p class="text-lg lg:text-4xl text-william-500 font-semibold">
                      {{ chapterItem?.item_name }}
                    </p>
                    <div class="mt-5 md:mt-10 flex flex-col gap-2 md:gap-5">
                      <template  v-for="(lesson, i) in chapterItem?.lessons" :key="`single-lesson-${i}`">
                        <NuxtLink v-if="isLogin" :to="`/lesson/${lesson.id}`" class="text-sm md:text-xl text-william-500 font-medium hover:underline">
                          {{ lesson?. name }}
                        </NuxtLink>
                        <p v-else class="text-sm md:text-xl text-william-500 font-medium">
                          {{ lesson?.name }}
                        </p>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isLogin, user, removeToken } = useAuthStore();
const toast = useToast();
const bgImage = ref(
  "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00MjItMDQ3LWtxOTJ3eDl5LmpwZw.jpg"
);
const featureImage = ref(
  "https://ogden_images.s3.amazonaws.com/www.iamcountryside.com/images/sites/1/2021/03/19120644/AdobeStock_332367251-scaled-e1659817162888.jpeg"
);

const { data, error, status } = useLazyAsyncData("courses", () => useApiFetch('/course'));

if(status === 'success' && !data.value){
  throw createError({
    statusCode: error?.value?.statusCode,
    statusMessage: error?.value?.statusMessage,
  });
}

</script>

<style>
.radialGradientBg {
  background: radial-gradient(circle, #8abcbe, 20%, #487f84);
}
</style>
