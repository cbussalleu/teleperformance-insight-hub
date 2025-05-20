
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type NavItem = {
  title: string;
  href: string;
  number: string;
};

const navItems: NavItem[] = [
  { title: "Home y Resumen", href: "/", number: "0" },
  { title: "Metodología", href: "/metodologia", number: "1" },
  { title: "Historia de la Relación", href: "/historia", number: "2" },
  { title: "Expectativas y Reputación", href: "/expectativas", number: "3" },
  { title: "Percepción de Valor", href: "/percepcion", number: "4" },
  { title: "Ciclo de Vida", href: "/ciclo-vida", number: "5" },
  { title: "Factores de Crecimiento", href: "/factores", number: "6" },
  { title: "Inclusión y RSE", href: "/rse", number: "7" },
  { title: "Competencia", href: "/competencia", number: "8" },
  { title: "Credibilidad Reposicionamiento", href: "/reposicionamiento", number: "9" },
  { title: "Análisis por Industria", href: "/industria", number: "10" },
  { title: "Conclusiones", href: "/conclusiones", number: "11" },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
  
  return (
    <div
      className={cn(
        "flex flex-col border-r bg-white transition-all duration-300 ease-in-out",
        collapsed ? "w-20" : "w-72",
        className
      )}
    >
      <div className="flex items-center justify-between border-b p-4">
        <div className={cn("flex items-center", collapsed ? "hidden" : "")}>
          <div className="font-bold bg-gradient-teleperformance bg-clip-text text-transparent">
            Teleperformance
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto"
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setActiveItem(item.href)}
              className={cn(
                "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                item.href === activeItem
                  ? "bg-gradient-teleperformance text-white"
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              <span className={cn("flex h-7 w-7 items-center justify-center rounded-full bg-white/10",
                item.href === activeItem
                  ? "text-white"
                  : "text-gray-500"
              )}>
                {item.number}
              </span>
              {!collapsed && <span>{item.title}</span>}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
