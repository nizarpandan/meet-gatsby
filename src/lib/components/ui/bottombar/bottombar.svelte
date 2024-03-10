<script lang="ts">
</script> 

<div class="w-full">
  <div class="bg-white dark:bg-gray-900">
    <div class="max-w-3xl px-2.5 mx-auto inset-x-0">
      <div class="pb-2">
        <form class="flex flex-col relative w-full rounded-3xl px-1.5 border border-gray-100 dark:border-gray-850 bg-white dark:bg-gray-900 dark:text-gray-100">
          <div class="flex">
            <div class="self-end mb-2 ml-1">
              <div aria-label="Upload files">
                <button class="bg-gray-50 hover:bg-gray-100 text-gray-800 dark:bg-gray-850 dark:text-white dark:hover:bg-gray-800 transition rounded-full p-1.5" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-[1.2rem] h-[1.2rem]">
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <textarea 
              id="chat-textarea" class="dark:bg-gray-900 dark:text-gray-100 outline-none w-full py-3 px-3  rounded-xl resize-none h-[48px]" 
              placeholder="Send a message" 
              rows="1" 
              style="height: 48px;">
            </textarea>
            <div class="self-end mb-2 flex space-x-1 mr-1">
              <div aria-label="Record voice">
                <button id="voice-input-button" class="text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-850 transition rounded-full p-1.5 mr-0.5 self-center" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 translate-y-[0.5px]">
                    <path d="M7 4a3 3 0 016 0v6a3 3 0 11-6 0V4z"></path>
                    <path d="M5.5 9.643a.75.75 0 00-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-1.5v-1.546A6.001 6.001 0 0016 10v-.357a.75.75 0 00-1.5 0V10a4.5 4.5 0 01-9 0v-.357z"></path>
                  </svg>
                </button>
              </div>
              <div aria-label="Send message">
                <button 
                  class="text-white bg-gray-100 dark:text-gray-900 dark:bg-gray-800 disabled transition rounded-full p-1.5 self-center" 
                  type="submit" 
                  disabled="{false}">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M8 14a.75.75 0 0 1-.75-.75V4.56L4.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>
        <div class="mt-1.5 text-xs text-gray-500 text-center">
          LLMs can make mistakes. Verify important information.
        </div>
      </div>
    </div>
  </div>
</div>