import { useState } from "react"
import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core"

import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"

import StatsWidget from "./StatsWidget"
import ChartWidget from "./ChartWidget"
import CalendarWidget from "./CalendarWidget"
import TasksWidget from "./TasksWidget"

export default function DashboardGrid() {
  const [widgets, setWidgets] = useState([
    { id: "stats", component: <StatsWidget /> },
    { id: "chart", component: <ChartWidget /> },
    { id: "calendar", component: <CalendarWidget /> },
    { id: "tasks", component: <TasksWidget /> },
  ])

  function handleDragEnd(event) {
    const { active, over } = event
    if (active.id !== over.id) {
      const oldIndex = widgets.findIndex(w => w.id === active.id)
      const newIndex = widgets.findIndex(w => w.id === over.id)

      setWidgets(arrayMove(widgets, oldIndex, newIndex))
    }
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={widgets} strategy={verticalListSortingStrategy}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {widgets.map((w) => (
            <div
              key={w.id}
              className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow"
            >
              {w.component}
            </div>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}
