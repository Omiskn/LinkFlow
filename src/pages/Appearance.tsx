import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function Appearance() {
  const [isDark, setIsDark] = useState(false);
  const [buttonStyle, setButtonStyle] = useState("rounded");
  const [font, setFont] = useState("Geist");
  const [backgroundStyle, setBackgroundStyle] = useState("soft");

  return (
    <div className="space-y-6">
      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle>Appearance Settings</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex items-center justify-between rounded-xl border p-3">
            <div>
              <p className="font-medium">Light / Dark mode</p>
              <p className="text-sm text-muted-foreground">Mock toggle only</p>
            </div>
            <Switch checked={isDark} onCheckedChange={setIsDark} />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Primary color</label>
            <div className="flex items-center gap-3">
              <Input type="color" className="h-10 w-20 p-1" defaultValue="#3db19c" />
              <Input value="#3db19c" readOnly className="max-w-40" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Button style</label>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={buttonStyle === "rounded" ? "default" : "outline"}
                onClick={() => setButtonStyle("rounded")}
              >
                Rounded
              </Button>
              <Button
                variant={buttonStyle === "sharp" ? "default" : "outline"}
                onClick={() => setButtonStyle("sharp")}
              >
                Sharp
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Font selector</label>
              <select
                value={font}
                onChange={(e) => setFont(e.target.value)}
                className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm"
              >
                <option>Geist</option>
                <option>Inter</option>
                <option>Poppins</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Background style</label>
              <select
                value={backgroundStyle}
                onChange={(e) => setBackgroundStyle(e.target.value)}
                className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm"
              >
                <option value="soft">Soft</option>
                <option value="flat">Flat</option>
                <option value="gradient">Gradient</option>
              </select>
            </div>
          </div>

          <div className="rounded-xl border bg-muted/40 p-4">
            <p className="text-sm text-muted-foreground">
              Preview: {isDark ? "Dark" : "Light"} mode, {buttonStyle} buttons, {font} font,{" "}
              {backgroundStyle} background.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
