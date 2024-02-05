export default function NewsCards({ title, image }) {
  return (
    <div class="w-full bg-slate-800 h-[200px] flex flex-col justify-end   text-white  border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
      <img src={image} className="w-full h-[145px]" />
      <div>
        <h5 class=" text-lg  tracking-tight  ">{title}</h5>
      </div>
      <p>Read More ...</p>
    </div>
  );
}
