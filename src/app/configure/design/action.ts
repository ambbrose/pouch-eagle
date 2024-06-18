"use server";

import { db } from "@/db";
import { CaseFinish, CaseMaterial, PhoneModel, PouchColor } from "@prisma/client";

export type SaveConfigArgs = {
    color: PouchColor
    finish: CaseFinish
    material: CaseMaterial
    model: PhoneModel
    configId: string
}

export async function saveConfig({
    color,
    finish,
    material,
    model,
    configId,
}: SaveConfigArgs) {
    await db.configuration.update({
        where: { id: configId },
        data: { color, finish, material, model },
    })
}