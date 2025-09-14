import Container from "../../components/ui/container/index.js";
import Button from "../../components/ui/button/index.js";
import Input from "../../components/ui/input/index.js";
import { GoCalendar, GoClock, GoArrowLeft } from "react-icons/go";

function RegisterHabit() {
  return (
    <Container
      flex
      direction="col"
      align="center"
      justify="center"
      className="bg-gray-50 p-6"
    >
      {/* Header */}
      <div className="w-full max-w-3xl flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Create New Habit</h1>
        <Button
          label="Back"
          variant="gray"
          iconLeft={GoArrowLeft}
          size="small"
        />
      </div>

      {/* Card */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-6 space-y-6">
        {/* Habit Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Habit Name
          </label>
          <Input placeholder="e.g. Study 1h" />
        </div>

        {/* Icon + Color */}
        <div className="grid grid-cols-2 gap-6">
          {/* Icon Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Icon
            </label>
            <div className="grid grid-cols-6 gap-3">
              {/* map de ícones */}
              <button className="p-2 rounded-lg border hover:border-green-500">
                📚
              </button>
              <button className="p-2 rounded-lg border hover:border-green-500">
                🏀
              </button>
              <button className="p-2 rounded-lg border hover:border-green-500">
                🎸
              </button>
              {/* ... */}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Color
            </label>
            <div className="grid grid-cols-6 gap-3">
              <button className="w-8 h-8 rounded-full bg-red-400 hover:ring-2 hover:ring-offset-2 hover:ring-green-500" />
              <button className="w-8 h-8 rounded-full bg-blue-400 hover:ring-2 hover:ring-offset-2 hover:ring-green-500" />
              <button className="w-8 h-8 rounded-full bg-yellow-400 hover:ring-2 hover:ring-offset-2 hover:ring-green-500" />
              {/* ... */}
            </div>
          </div>
        </div>

        {/* Repeat Options */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Repeat
          </label>
          <select className="w-full border rounded-lg p-2">
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-6">
          {/* End Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              End Habit on
            </label>
            <div className="flex items-center border rounded-lg p-2">
              <GoCalendar className="mr-2 text-gray-500" />
              <input type="date" className="flex-1 outline-none" />
            </div>
          </div>

          {/* Reminder */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Set Reminder
            </label>
            <div className="flex items-center border rounded-lg p-2">
              <GoClock className="mr-2 text-gray-500" />
              <input type="time" className="flex-1 outline-none" />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <Button label="Save Habit" variant="green" size="medium" />
        </div>
      </div>
    </Container>
  );
}

export default RegisterHabit;
