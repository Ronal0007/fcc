<script>
        $('.carousel').carousel({ // targetting carousel class
          interval: 1000,  // 1000 milliseconds
          keyboard: true,  // being able to change w keyboard if true
          pause: 'hover', // means if hovering over won't change
          wrap: true // true by default, just means it will keep looping once reach last (vs false, will stop on last)
        });
    </script>