import { Button } from "@/components/ui/button"

export default function Teste() {
    return (
        <>
            <div className="flex flex-wrap items-center gap-2 md:flex-row p-(--p-3)">
                <Button variant="default">Button</Button>
                <Button variant="secondary">Button</Button>
                <Button variant="outlinePrimary">Button</Button>
                <Button variant="outlineSecondary">Button</Button>
                <Button variant="destructive">Button</Button>
                <Button variant="ghost">Button</Button>
                <Button variant="link">Button</Button>
            </div>
        </>
    )
}