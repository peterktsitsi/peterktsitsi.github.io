import { createSignal } from "solid-js";

export default function Tabs(props) {
  const [active, setActive] = createSignal(0);

  return (
    <div class="w-full border rounded-lg overflow-hidden">
      
      <div class="flex border-b bg-gray-50">
        {props.tabs.map((tab, i) => (
          <button
            class={`px-4 py-2 text-sm font-medium transition
            ${active() === i
              ? "border-b-2 border-blue-500 text-blue-600 bg-white"
              : "text-gray-600 hover:text-black hover:bg-gray-100"}`}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div class="p-4">
        {props.tabs[active()].content}
      </div>

    </div>
  );
}